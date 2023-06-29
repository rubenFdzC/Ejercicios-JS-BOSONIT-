const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const nonCapitalCities = arrCities2.map(cityObj => {
    return {
      city: cityObj.city,
      isSpain: cityObj.country === 'Spain'
    };
  });

  console.log(nonCapitalCities);
  
