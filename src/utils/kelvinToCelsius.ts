const kelvinToCelsius = (temp: number) => {
  if (!temp) return;

  const result = temp - 273.15;

  return result.toFixed(1);
};

export default kelvinToCelsius;
