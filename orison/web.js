// Sample Mock Data
const weatherData = {
  Hyderabad: {
    temperature: 28,
    condition: "Cloudy",
    icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
    timezone: 5.5, // UTC+5:30
  },
  Delhi: {
    temperature: 32,
    condition: "Sunny",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    timezone: 5.5,
  },
  Agra: {
    temperature: 30,
    condition: "Rainy",
    icon: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    timezone: 5.5,
  },
  Mumbai: {
    temperature: 29,
    condition: "Cloudy",
    icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
    timezone: 5.5,
  },
};

// Elements
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");
const localTime = document.getElementById("localTime");
const cityButtons = document.querySelectorAll(".city-btn");

// Event Listener for Search Button
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city && weatherData[city]) {
    displayWeather(city);
  } else {
    alert("City not found. Please try again!");
  }
});

// Event Listeners for Popular City Buttons
cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const city = button.dataset.city;
    displayWeather(city);
  });
});

// Function to Display Weather Data
function displayWeather(city) {
  const data = weatherData[city];
  cityName.textContent = city;
  temperature.textContent = `Temperature: ${data.temperature}°C`;
  condition.textContent = `Condition: ${data.condition}`;
  weatherIcon.src = data.icon;
  weatherIcon.alt = data.condition;

  // Calculate Local Time
  const now = new Date();
  const offset = data.timezone * 3600 * 1000; // Convert timezone to milliseconds
  const local = new Date(now.getTime() + offset);
  localTime.textContent = `Local Time: ${local.toLocaleTimeString()}`;

  // Update Background
  document.body.style.background = getBackground(data.condition);

  weatherDisplay.style.display = "block";
}

// Function to Get Background Based on Condition
function getBackground(condition) {
  switch (condition) {
    case "Sunny":
      return "linear-gradient(to right, #ff9800, #ff5722)";
    case "Cloudy":
      return "linear-gradient(to right, #bdbdbd, #757575)";
    case "Rainy":
      return "linear-gradient(to right, #4facfe, #00f2fe)";
    default:
      return "linear-gradient(to right, #6dd5fa, #2980b9)";
  }
}
