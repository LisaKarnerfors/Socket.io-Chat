import fetch from 'node-fetch'

export async function handlerMessage(msg) {
    console.log('handlerMessage(): ', msg)
    if(msg === "/cocktail") {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await res.json()

        const drink = data.drinks[0]
        return drink.strDrink
    }
    return msg
}