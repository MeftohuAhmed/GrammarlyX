import { getStyledText, getToneSuggestion } from "./ApiRequest";

/**
 * Processes an API request based on the specified type and context.
 * 
 * This function handles API requests by determining the type of request
 * ('style' or 'tone') and calling the appropriate function with the provided
 * content and context. It returns the result from the API or an error message
 * if the type is invalid.
 *
 * @param {Object} param The parameters for the API request.
 * @param {string} param.content The text content to be processed by the API.
 * @param {string} param.type The type of API request ('style' or 'tone').
 * @param {string} param.context The context for the API request (depends on the type).
 * @returns {Promise<string>} A promise that resolves to the result returned by the API or an error message.
 */
export const getResult = async ({ content, type, context }) => {
  switch (type) {
    case "style":
      return getStyledText(content, context);
    case "tone":
      return getToneSuggestion(content, context);
    default:
      return "Invalid type";
  }
};
