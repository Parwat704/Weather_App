async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) return;
  
    const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=WFGPTFK2HXH7MQ6YZTWVBTVS2&contentType=json`;
  
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
  
      const currentConditions = data.currentConditions;
      document.getElementById('weatherCard').style.display = 'block';
      document.getElementById('cityName').textContent = data.resolvedAddress;
      document.getElementById('temp').textContent = `Temperature: ${currentConditions.temp}°F`;
      document.getElementById('condition').textContent = `Condition: ${currentConditions.conditions}`;
    } catch (error) {
      alert("City not found or API error.");
      document.getElementById('weatherCard').style.display = 'none';
    }
  }
  