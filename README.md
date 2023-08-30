# Photo app

A simple React application that displays a collection of articles fetched from an API. The app uses infinite scroll to load more articles as the user scrolls down.

## Features

- Displays articles in a responsive grid layout.
- Infinite scroll functionality to load more articles as the user scrolls.
- Displays the author's name and a thumbs-up icon for each article.

## Getting Started

1. Clone the repository:

git clone <repository-url>
cd "photoi"

2. Install the dependencies:

npm install

3. Start the development server:

npm start

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Tech Stack

- React
- Axios (for API requests)
- CSS (for styling)

## Folder Structure

The project is organized as follows:

- `public/`: Contains the HTML template and other static files.
- `src/`: Contains the React components and application logic.
- `App.js`: The main application component.
- `Article.js`: Component to render individual articles.
- `styles.css`: Styles for the app.
- `assets/`: Contains images and other static assets.

## Acknowledgments

This app is created as a demonstration and learning exercise. It uses the [Picsum Photos API](https://picsum.photos/) to fetch placeholder images and display them as articles.