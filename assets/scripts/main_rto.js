let inputEl = document.querySelector('input');
let submitEl = document.getElementById('submit');

async function getJSONData() {
    try {
        const response = await fetch('../assets/json/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return []; // Return an empty array in case of an error
    }
}

const validateInput = (value) => {
    // Basic validation: ensure value is not empty and has at least 4 characters
    if (!value || value.trim().length < 4) {
        return 'Please enter at least 4 characters.';
    }
    return null; // Return null if validation passes
}

const searchRecord = async (value) => {
    const validationError = validateInput(value);
    if (validationError) {
        alert(validationError); // Display validation error
        return;
    }

    console.log('Searching for:', value.toUpperCase());
    const jsonData = await getJSONData();

    // Find the record matching the value
    const recordFound = jsonData.find((record) => {
        return record.code === value.toUpperCase() || value.toUpperCase().startsWith(record.code);
    });

    const resultSectionEL = document.querySelector("#resultSection");
    const mainBodyEl = document.querySelector(".main-body");

    if (recordFound) {
        if (resultSectionEL) {
            resultSectionEL.classList.remove('hidden');

            // Select table cells by ID and update their innerText
            const queryEl = resultSectionEL.querySelector('#query');
            const idElement = document.querySelector('#rto_id');
            const codeElement = document.querySelector('#rto_code');
            const locationElement = document.querySelector('#rto_location');
            const typeElement = document.querySelector('#rto_type');
            const districtElement = document.querySelector('#rto_district');

            if (queryEl) queryEl.innerText = value.toUpperCase() || 'N/A';
            if (idElement) idElement.innerText = recordFound.id || 'N/A';
            if (codeElement) codeElement.innerText = recordFound.code || 'N/A';
            if (locationElement) locationElement.innerText = recordFound.location || 'N/A';
            if (typeElement) typeElement.innerText = recordFound.type || 'N/A';
            if (districtElement) districtElement.innerText = recordFound.district || 'N/A';

            // Ensure the main body is visible
            if (mainBodyEl) mainBodyEl.classList.remove('hidden');
        } else {
            console.error('resultSectionEL is null');
        }
    } else {
        if (resultSectionEL) {
            resultSectionEL.classList.add('hidden');
        }
        if (mainBodyEl) {
            mainBodyEl.classList.add('hidden');
        }
        alert('No record found for the given value.');
    }
};

// Add event listener for Enter key press
inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchRecord(inputEl.value);
    }
});

// Add event listener for submit button click
submitEl.addEventListener('click', () => {
    searchRecord(inputEl.value);
});
