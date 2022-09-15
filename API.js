import fetch from 'node-fetch'

export async function handlerMessage(msgApi) {
    console.log(msgApi)
    if(msgApi === "/cocktail") {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await res.json()

        const drink = data.drinks[0]
        console.log(drink.strDrink)
        return drink.strDrink
    }
    return msgApi
}





