// Import the OpenAI SDK
import { Configuration, OpenAIApi } from "openai";

// Step 1: Configure OpenAI with your API key
const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace this with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Step 2: Create a function to send input and get AI output
async function getAIResponse(userInput) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4", // Use the GPT-4 model
      messages: [{ role: "user", content: userInput }], // User's input
      max_tokens: 100, // Limit the response length
    });

    console.log("AI Response:", response.data.choices[0].message.content.trim());
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.message);
  }
}

// Step 3: Test the function with an example input
getAIResponse("Explain the basics of AI.");

