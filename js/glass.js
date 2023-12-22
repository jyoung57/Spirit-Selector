'use strict';

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetCocktailByGlassType(event) {
  event.preventDefault();

  const glassName = event.target.cocktail.value;
  $('#drinkList').html('');
  $('#drinkNames').html('');

  $.get(base_url + `/filter.php?g=${glassName}`, function (data) {
    console.log(data, 'url function');
    console.log(data.drinks[0].strDrink, 'array test');

    const drinkData = data.drinks;
    const drinkName = data.drinks[0].strDrink;
    $('#drinkList').append(`<h4>List of Drinks for a ${drinkName}:</h4>`);

    for (let i = 0; i < drinkData.length; i++) {
      const glass = drinkData[i];
      if (glass) {
        $('#drinkNames').append(`<p>${drinkName}</p>`);
      }
    }    
  });
}
