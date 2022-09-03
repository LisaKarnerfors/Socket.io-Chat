import fetch from 'node-fetch'

export async function handlerMessage(io, socket, msg) {
    console.log(msg)
    if(msg.startsWith("/cock")) {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await res.json()
        /* console.log('Min random cocktail', data.drinks[0]) */
        
        const drink = data.drinks[0]
        console.log(drink.strDrink)
        msg = drink.strDrink
    }
    io.emit("msg", msg)

}