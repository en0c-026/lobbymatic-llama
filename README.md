# LobbyMatic-Llama

LobbyMatic-Llama is a project that leverages the power of machine learning models through SageMaker to generate creative and context-aware prompts. This README provides instructions on how to set up and run the LobbyMatic-Llama project.

## Getting Started

### Clone the Repository

First, clone the LobbyMatic-Llama repository to your local machine:

```bash
git clone https://github.com/your-username/lobbymatic-llama.git
```

### Install Dependencies

```bash
cd lobbymatic-llama
yarn install
```

### Modify the prompt and model parameters 
In the main.js file, adjust the inputs and parameters fields to customize the prompt and generation parameters.
```javascript
// Prompt and generation params
const inputData = {
  inputs: 'Large model inference is',
  parameters: { max_new_tokens: 100 },
};
```

### Execute the script using Node.js:
```bash
node main.js
```

This will send a request to SageMaker with the specified prompt and parameters, generating a response based on the machine learning model.

Feel free to experiment with different prompts and parameters to explore the creative capabilities of LobbyMatic-Llama.

