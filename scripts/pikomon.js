import { getPikomon } from "./database.js"


//define and export function that brings database from database.js
export const renderPikomon = () => {
    const pikomonList = getPikomon()

    let htmlString = `<article class="pikomon-list">`

    for (const pikomon of pikomonList) {
        htmlString += `<section class="pikomon-card">
        <div><img src="${pikomon.imageUrl}" class="piko-img"></div>

        <div class="piko-name">${pikomon.name}</div>

        <div class="categories">Category: ${pikomon.category}</div>

        <div class="abilities">Abilities: ${pikomon.abilities}</div>

        <div class="weakness">Weakness: ${pikomon.weakness}</div>

        
        </section>`
    } 
    htmlString += `</article>`
    return htmlString
} 



//create HTML representations in a function


//export to main.js to call function