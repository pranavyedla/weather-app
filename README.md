# Weather App (React.js)

A simple and beautiful weather app built with React.js, fetching live weather data from a public weather API. Instantly check the current weather and forecast for any city worldwide.

## Features

- Search weather by city name
- Real-time weather details (temperature, condition, humidity, etc.)
- Next-day or multi-day forecast (if supported by API)
- Clean and responsive user interface
- Error handling for invalid city names

## Technologies Used

- React.js
- Axios (for API calls)
- WeatherAPI.com (or your chosen weather API)
- CSS

## Live Demo

👉 [weather-app-three-liard-21.vercel.app](https://weather-app-three-liard-21.vercel.app/)

## Getting Started

1. **Clone the repository**
    ```sh
    git clone https://github.com/pranavyedla/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **API Key Setup**
    - Register at [weatherapi.com](https://www.weatherapi.com/) or your chosen API provider.
    - Create a `.env` file in the project root:
        ```
        VITE_WEATHER_API_KEY=your_api_key_here
        ```
    - (Or update `src/api.js` or the config file directly with your API key, as per your codebase.)

4. **Run the app locally**
    ```sh
    npm run dev
    ```
    The app runs at `http://localhost:5173`
