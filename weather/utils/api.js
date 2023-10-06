export const fetchWeather = async city => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f716fc7b9db7456dad9210234230610&q=${city}`,
  );
  const data = await response.json();

  return {
    location: data.location.name,
    weather: data.current.condition.text,
    temperature: data.current.temp_c,
  };
};
