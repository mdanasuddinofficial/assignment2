# Movie Explorer

Movie Explorer is a React-based web application that allows users to explore TV shows, search for their favorite titles, and view detailed information about a selected show.

## Features

- Responsive navigation bar
- Hero section with an Explore Movies button
- Movie/show listing page
- Search functionality
- Movie/show poster and title
- Rating and release date
- Genre information
- Movie/show summary
- Details modal
- Loading state
- Error handling
- No results message
- Responsive design for different screen sizes

## Technologies Used

- React
- React Router
- Tailwind CSS
- DaisyUI
- Vite
- Bun
- TVMaze API

## API

This project uses the TVMaze API to fetch and search for shows.

### All Shows

https://api.tvmaze.com/shows

### Search Shows

https://api.tvmaze.com/search/shows?q={query}

## Project Structure

src/
├── assets/
│   └── hero.png
│
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── SearchBar/
│   │   └── SearchBar.jsx
│   ├── MovieCard/
│   │   └── MovieCard.jsx
│   ├── MovieGrid/
│   │   └── MovieGrid.jsx
│   └── MovieModal/
│       └── MovieModal.jsx
│
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   └── Movies/
│       └── Movies.jsx
│
├── App.jsx
├── index.css
└── main.jsx

## Installation

Clone the repository and install the dependencies.

```bash
bun install
```

## Run Locally

Start the development server:

```bash
bun run dev
```

The application will then be available at the local development URL provided by Vite.

## Application Pages

### Home Page

The home page contains:

- Navigation bar
- Hero banner
- Explore Movies button
- Footer

### Movies Page

The movies page contains:

- Search bar
- Movie/show cards
- Rating
- Release date
- Genre
- See Details button

### Movie Details

Clicking the **See Details** button opens a modal containing:

- Large poster
- Title
- Rating
- Release date
- Genre
- Summary
- Close button

## Responsive Design

The application is designed to work across:

- Desktop
- Tablet
- Mobile

## Author

**MD. Anas Uddin**