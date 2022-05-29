import '../css/main.scss'
import axios from 'axios'
import _ from 'lodash'
import world from '../img/world.png'
import { mostraImmagine } from './mostra.js'
import { mostraSommario } from './mostra.js'
import { mostraPunteggi } from './mostra.js'
import { mostraTotale } from './mostra.js'
import { mostraLearnMore } from './mostra.js'

// richiamo alcuni elementi dal DOM
const form = document.querySelector('form');
export const resultsBox = document.querySelector('.resultsBox');
const worldImg = document.getElementById('world');
const searchBtn = document.querySelector('#cerca');

// implemento immagine del mondo sopra la barra di ricerca
worldImg.src = world;

// creo funzione che rende i termini cercati inseribili in un URL
const convertiTesto = function (testo) {
    let urlTesto = testo.replace(/ /g, "%20").replace(/,/g, "%2C");
    return urlTesto;
}

// creo funzione per arrotondare ad una cifra decimale
export const arrotondaNum = function (num) {
    let rounded = Math.round(num * 10) / 10;
    return rounded;
}

// creo funzione per convertire i valori compresi tra 0 e 10 in valori percentuali
export const percentNum = function (numDa0A10) {
    let percent = `${numDa0A10 * 10}%`
    return percent;
}

// Creo EventListener per risalire (tramite 5 GET requests) a: immagine, sommario, punteggi e link alla pagina di teleport relativa alla citta cercata.

// Esempio con la ricerca "ROMA":
// 1) prima get request a `https://api.teleport.org/api/cities/?search=ROMA`;
// 2) seconda get request a `https://api.teleport.org/api/cities/geonameid:3169070/` (url ricavato dalla risposta alla prima get request);
// 3) terza get request a `https://api.teleport.org/api/urban_areas/slug:rome/ + scores` (url ricavato dalla risposta alla seconda get request);
// 4) quarta get request a `https://api.teleport.org/api/urban_areas/slug:rome/ + images`;
// 5) quinta get request a `https://api.teleport.org/api/urban_areas/slug:rome` (per ricavare https://teleport.org/cities/rome/).

form.addEventListener('submit', async function (e) {

    // impedisco il refresh della pagina al submit del form
    e.preventDefault();

    // rimuovo risultati relativi a eventuali ricerche precedenti 
    resultsBox.innerHTML = '';

    // // creo una variabile che rappresenti le parole cercate dall'utente
    const ricerca = form.elements.query.value;

    // creo un condizionale per il caso in cui l'utente lasci la barra di ricerca vuota
    if (ricerca === '') {
        const empty = document.createElement('DIV');
        empty.classList.add('addedEl');
        empty.classList.add('error');
        empty.innerText = `PLEASE ENTER A CITY`;
        resultsBox.appendChild(empty)
    } else {
        try {
            // disabilito il pulsante SUBMIT finchè non sarà giunta la risposta all'ultima GET request
            searchBtn.setAttribute('disabled', true);
            searchBtn.classList.add('searching');
            // 1) trovo la citta col "matching_full_name" piu' vicino alle parole cercate;
            const citta = convertiTesto(ricerca);
            const cercaNomeCitta = await axios.get(`${process.env.TP_API_SEARCH_URL}${citta}`);
            // console.log(cercaNomeCitta.data);

            // 2) trovo l'url relativo alla urban area corrispondente alla citta
            const urbanAreaUrl = _.get(cercaNomeCitta, 'data._embedded["city:search-results"][0]._links["city:item"].href');
            const cercaSlug = await axios.get(`${urbanAreaUrl}`);
            const slugUrl = _.get(cercaSlug, 'data._links["city:urban_area"].href');

            // 3) risalgo ai punteggi 
            const risultati = await axios.get(`${slugUrl}scores`);

            // 4) trovo l'immagine corrispondente alla "urban_area"
            const immagini = await axios.get(`${slugUrl}images`);

            // 5) trovo l'url da usare come destinazione del tasto "LEARN MORE"
            const moreInfo = await axios.get(`${slugUrl}`);
            const moreInfoUrl = _.get(moreInfo, 'data.teleport_city_url')

            // // chiamo le 4 funzioni definite in mostra.js
            mostraImmagine(immagini);
            mostraSommario(risultati);
            mostraPunteggi(risultati);
            mostraTotale(risultati);
            mostraLearnMore(moreInfoUrl)
                // ripristino pulsante SUBMIT
                .then(() => {
                    searchBtn.removeAttribute('disabled');
                    searchBtn.classList.remove('searching');
                });
        } catch (e) {
            if (e.request.status === 404) {
                // mostro dettagli sull'errore nella console
                console.log("ERROR!", e);
                console.log(e.request.status);
                // ripristino pulsante SUBMIT
                searchBtn.removeAttribute('disabled');
                searchBtn.classList.remove('searching');
                // Creo div con messaggio di errore
                const error = document.createElement('DIV');
                error.classList.add('addedEl');
                error.classList.add('error');
                error.innerText = `CITY NOT FOUND :(`;
                resultsBox.appendChild(error);
            } else {
                // mostro dettagli sull'errore nella console
                console.log("ERROR!", e);
                console.log(e.request.status);
                // ripristino pulsante SUBMIT
                searchBtn.removeAttribute('disabled');
                searchBtn.classList.remove('searching');
                // Creo div con messaggio di errore
                const error = document.createElement('DIV');
                error.classList.add('addedEl');
                error.classList.add('error');
                error.innerText = `OOPS! SOMETHING WENT WRONG :/`;
                resultsBox.appendChild(error);
            }

        }
    }
});