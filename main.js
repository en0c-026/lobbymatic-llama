const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime");

require('dotenv').config();

// Create an instance of the SageMakerRuntime client
const sagemakerRuntimeClient = new SageMakerRuntimeClient({});

// Endpoint name
const endpointName = 'meta-textgeneration-llama-2-7b'; // Reemplaza con tu nombre de endpoint

// Prompt and generations params
const inputData = {
  inputs: 'Large model inference is',
  parameters: { max_new_tokens: 100 },
};

// Request params
const params = {
  EndpointName: endpointName,
  Body: JSON.stringify(inputData),
  ContentType: 'application/json',
};

// request to SageMaker using invokeEndpoint
sagemakerRuntimeClient.send(new InvokeEndpointCommand(params))
  .then(response => {
    const responseBody = Buffer.from(response.Body).toString('utf-8');
    console.log(responseBody);
  })
  .catch(error => {
    console.error(error);
  });
