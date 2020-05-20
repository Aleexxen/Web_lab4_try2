import { home } from './home';
import { pokemon } from './pokemon';

let btnHome = document.querySelector('.home'),
    btnPokemon = document.querySelector('.pokemon'),
    app = document.querySelector('#app')

home()
btnHome.onclick = home
btnPokemon.onclick = pokemon