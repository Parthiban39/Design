const apiKey = 'daeafd114cb16f2f859afcb141cd0662';

document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = document.getElementById('city-input').value.trim();
  console.log('City entered:', city);

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    console.log('API Response:', response);

    if (!response.ok) 
      throw new Error('City not found');

    const data = await response.json();

    document.getElementById('city-name').textContent = `${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('wind').textContent = `wind: ${data.wind.speed}m/s`;
    document.getElementById('humidity').textContent = `humidity ${data.main.humidity}%`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('city-name').textContent = 'error';
    document.getElementById('temperature').textContent = '';
    document.getElementById('description').textContent = error.message;
    document.getElementById('wind').textContent = '';
    document.getElementById('humidity').textContent = '';
  }
});
