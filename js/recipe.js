'use strict'

// Recipe Search

const base_url = 'https://www.thecocktaildb.com/api/json/v1/1';

function handleGetRecipe(event) {
  event.preventDefault();

  const recipeName = event.target.cocktail.value;
  $('#recipe').html("");
  

  $('#recipe').append(`<h2>Ingredients for ${recipeName}</h2>`);
  console.log(recipeName, 'recipe name');

  $.get(base_url + `/search.php?s=${recipeName}`, function (data) {
    console.log(data);
    console.log(data.drinks[0].strInstructions);
    


    const drinkData = data.drinks[0]
    $('#ingredient1').append(drinkData.strIngredient1);
    $('#ingredient2').append(drinkData.strIngredient2);
    $('#ingredient3').append(drinkData.strIngredient3);
    $('#ingredient4').append(drinkData.strIngredient4);
    $('#ingredient5').append(drinkData.strIngredient5);
    $('#ingredient6').append(drinkData.strIngredient6);
    $('#ingredient7').append(drinkData.strIngredient7);
    $('#ingredient8').append(drinkData.strIngredient8);
    $('#ingredient9').append(drinkData.strIngredient9);
    $('#ingredient10').append(drinkData.strIngredient10);
    $('#ingredient11').append(drinkData.strIngredient11);
    $('#ingredient12').append(drinkData.strIngredient12);
    $('#ingredient13').append(drinkData.strIngredient13);
    $('#ingredient14').append(drinkData.strIngredient14);
    $('#ingredient15').append(drinkData.strIngredient15);
    $('#ingredientMeasurement1').append(drinkData.strMeasure1);
    $('#recipe').append(drinkData.strInstructions);
    
  });
}