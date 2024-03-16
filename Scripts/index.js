// Handle OpenAI API request
const submitButton = document.getElementById('submit-button');
const input = document.getElementById('input');

submitButton.addEventListener('click', () => {
    const prompt = input.value;
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const data = {
        model: 'gpt-3.5-turbo',
        max_tokens: 1000,
        temperature: 0.7,
        n: 1,
        messages: [
            {"role": "user", "content": prompt}
        ]
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    axios.post(endpoint, data, { headers: headers })
        .then(response => {
            console.log('Response:', response.data.choices[0].message.content.trim());
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Handle work checkbox
const workCheckbox = document.getElementById('work-checkbox');
const workTimeContainer = document.getElementById('work-time-container-container');

workCheckbox.addEventListener('change', function() {
    if (this.checked) {
        workTimeContainer.style.maxHeight = workTimeContainer.scrollHeight + 'px';
        workTimeContainer.style.padding = '20px';
    } else {
        workTimeContainer.style.maxHeight = '0';
        workTimeContainer.style.padding = '0px';
    }
});

// Auto-add input fields on Enter press
document.addEventListener('DOMContentLoaded', function() {
    const infoContainer = document.getElementById('info-container');

    // Function to create a new input field
    function createInput() {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'info';
        newInput.placeholder = 'Enter activities:';
        infoContainer.appendChild(newInput);
        newInput.focus();
    }

    // Event listener for "keydown" event
    infoContainer.addEventListener('keydown', function(event) {
        const target = event.target;
        if (event.key === 'Enter' && target.classList.contains('info') && target.value !== '') {
            createInput();
        }
    });
});
