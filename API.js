import fetch from 'node-fetch'

export async function handlerMessage(io, socket, msgApi) {
    console.log(msgApi)
    if(msgApi.startsWith("/cocktail")) {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await res.json()
      
        const drink = data.drinks[0]
        console.log(drink.strDrink)
        msgApi = drink.strDrink
    }
    io.emit("msgApi", msgApi)
}





