import fetch from 'node-fetch'

export async function handlerMessage(io, socket, msgApi) {
    console.log(msgApi)
    if(msgApi.startsWith("/cocktail")) {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await res.json()
        /* console.log('Min random cocktail', data.drinks[0]) */
        const drink = data.drinks[0]
        console.log(drink.strDrink)
        msgApi = drink.strDrink
    }
    io.emit("msg", msgApi)
}


// Lägg till API med fler drinkar..

// Ta bort? 
export async function emojiHandler(io, socket, msgEmoji) {
const res = await fetch ('https://mojitok-mojitok-emoticons-v1.p.rapidapi.com/emoticons?text=%3CREQUIRED%3E&language=en', {
    
    method: 'GET',
    headers: {
        'mojitok-token': 'undefined',
        'X-RapidAPI-Key': '4c9b96648amsh2dc6631f46e1410p14cef6jsn330d2b37413c',
        'X-RapidAPI-Host': 'mojitok-mojitok-emoticons-v1.p.rapidapi.com'
    }
    //const data = await res.json()

    }) 
}

/* fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
} */