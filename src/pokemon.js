export async function pokemon() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    let jsonValue = await data.json()


    function pokemonInfo(value) {
        let template = ''
        template += `<img style="width: 200px" src="${value.sprites.front_default}">`
        template += `<h3>${value.name}<h3/>`
        template += `
        <h5>Abilities</h5>
        <ul>
        `
        value.abilities.map(item => {
            template += `<li>${item.ability.name}</li>`
        })

        template += '</ul>'

        app.innerHTML = template
    }

    pokemonInfo(jsonValue)
}