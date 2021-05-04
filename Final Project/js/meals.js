'use strict';

let search = document.querySelector("#submit");
let ran = document.querySelector("#random-recipe");
let data;
let tag;

const apiurl = `https:www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
const randomRecipe = `https://www.themealdb.com/api/json/v1/1/random.php`;

async function getapi(url) {
    const response = await fetch(url);

    let data = await response.json();
    console.log(data);

    const mealImg = data.meals[0].strMealThumb;
    console.log(mealImg);
    const name = data.meals[0].strMeal;
    console.log(name);
    const instructions = data.meals[0].strInstructions;
    console.log(instructions);
    const tags = data.meals[0].strTags;
    console.log(tags);
    const youtube = data.meals[0].strYoutube;
    console.log(youtube);

    let table = "";  
    

    tag = 
        `<div class="recipe">
            <h2>${name}</h2>
            <div class="meals">
                <img src="${mealImg}" class="img">
            </div> 
            <h3>Instructions</h3>   
            <p>${instructions}</p>
            <table>${table}</table>
        </div>`

    document.querySelector(".recipe-area").innerHTML = tag   
}

document.querySelector("#submit").addEventListener('click', getapi(apiurl));
document.querySelector("#random-recipe").addEventListener('click', getapi(randomRecipe));


