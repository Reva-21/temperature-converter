document.getElementById('convertButton').addEventListener('click', function () {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');

    resultElement.textContent = '';

    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Please enter a valid temperature value.';
        return;
    }

    let convertedTemperature;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = temperatureInput + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (temperatureInput - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = temperatureInput - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else {
        resultElement.textContent = 'Please select valid units for conversion.';
        return;
    }
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°${toUnit}`;
});
