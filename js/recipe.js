'use strict'

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetRecipe(event) {
  event.preventDefault();

  const recipeName = event.target.cocktail.value;
  $('#recipe').html("");


  $.get(base_url + `/search.php?s=${recipeName}`, function (data) {
    console.log(data);
    console.log(data.drinks[0].strInstructions);

  const drinkData = data.drinks[0]
  $("#ingredients").append(`<h1>Ingredients for a ${drinkData.strDrink}</h1>`)
  
  $('#ingredientMeasurement1').append(drinkData.strMeasure1);
  $('#recipe').append(drinkData.strInstructions);

  for (let i = 1; i <= 15; i++) {
    const ingredient = drinkData["strIngredient" + i];
    if (ingredient) {
      $("#ingredients").append(`<p>${ingredient}</p>`);
          }
        }
      }
    );
  }
  