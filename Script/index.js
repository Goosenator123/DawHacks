const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  let prompt = input.value; // Use input.value instead of input.textContent

  // Set your OpenAI API key
  const apiKey = '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';

  // Set the endpoint URL
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  // Set parameters for the completion request
  const data = {
      model: 'gpt-3.5-turbo', // Specify the model you want to use
      max_tokens: 1000,
      temperature: 0.7,
      n: 1,
      messages: [
          {"role": "user", "content": prompt}
      ]
  };

  // Set headers including the API key
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  // Dynamic import
  import('axios').then(({ default: axios }) => {
    // Make a POST request to the OpenAI API
    axios.post(endpoint, data, { headers: headers })
      .then(response => {
        console.log('Response:', response.data.choices[0].message.content.trim());
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
})
