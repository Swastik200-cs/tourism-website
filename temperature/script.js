function convertTemperature() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitSelect').value;
  let result = '';

  if (isNaN(temp)) {
    result = 'Please enter a valid number.';
  } else {
    if (unit === 'celsius') {
      const f = (temp * 9 / 5) + 32;
      const k = temp + 273.15;
      result = `${temp}°C = ${f.toFixed(2)}°F | ${k.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
      const c = (temp - 32) * 5 / 9;
      const k = (temp - 32) * 5 / 9 + 273.15;
      result = `${temp}°F = ${c.toFixed(2)}°C | ${k.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
      const c = temp - 273.15;
      const f = (temp - 273.15) * 9 / 5 + 32;
      result = `${temp}K = ${c.toFixed(2)}°C | ${f.toFixed(2)}°F`;
    }
  }

  document.getElementById('result').innerText = result;
}
