// const pokemon = document.querySelector("pokeName").value



const randomPokemon = (Math.floor(Math.random() * 151))
const url = `https://pokeapi.co/api/v2/pokemon/`+randomPokemon



fetch(url)

    .then(res => res.json()) // parse response as JSON
    .then(data => {

        const pokeName = data.name
        const pokeImgShine = data.sprites.
        front_shiny
        const PokeRegImg = data.sprites.front_default
        const pokeHeight = data.height/10
        const pokeWeight = data.weight/10
        

        document.querySelector('.pokeName').innerText = pokeName
        document.querySelector('.regular').src = PokeRegImg 
        document.querySelector('.height').innerText = pokeHeight

        document.querySelector('button').addEventListener('click', guess)

        
        
        function guess(){
            let x = +document.querySelector('#input').value
            const pokeWeight = data.weight/10
            
            if(x === pokeWeight){
            document.querySelector('.regular').src = pokeImgShine
            document.querySelector('.weight').innerText = pokeWeight 
                console.log("You got it!")

            }else{
                document.querySelector('.weight').innerText = pokeWeight
                console.log("Try again!")
                // document.querySelector('.regular').src = pokeImgShine
            }
        }
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

