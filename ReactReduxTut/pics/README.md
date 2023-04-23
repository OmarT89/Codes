## Image Search App

This React application allows users to search and display images using the Unsplash API. It demonstrates the efficient handling of asynchronous requests and effective management of application state using functional components and hooks.

## Application Structure

App.js: Main component responsible for managing state and rendering the SearchBar and ImageList components.
api.js: Contains the searchImages function to perform API requests to Unsplash and handle responses.
index.js: Entry point for the application, responsible for rendering the App component.
SearchBar.js: The search bar component, which includes an input field for entering search terms and handling form submission.
ImageShow.js: Responsible for rendering a single image with its corresponding alt text.
ImageList.js: Renders a list of images using the ImageShow component.

## How it works

The user enters a search term into the search bar, and upon submission, an API request is made to Unsplash using the searchImages function. The resulting images are then stored in the state, which triggers a re-render of the ImageList component, displaying the retrieved images.

## Key features

implementation of functional components and hooks for better performance and readability.
Modular design with a focus on reusability and maintainability.
Responsive design for an optimal user experience across devices.
Thorough error handling for robustness and reliability.
Secure management of API keys using environment variables.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using npm install.
3. Set up the Unsplash API key in the .env file.
4. Run the development server with npm start.
   Now, you should be able to use the application by navigating to http://localhost:3000 in your browser.

## Written by Omar Tarek <
