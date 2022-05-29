
import _ from 'lodash'
import { resultsBox } from './index.js'
import { arrotondaNum } from './index.js'
import { percentNum } from './index.js'

// Definisco 5 FUNZIONI ASINCRONE (da esportare in index.js) per creare elementi HTML con: immagine, sommario, singoli punteggi, punteggio complessivo e link alla pag. di teleport relativa alla citta
// 1
export async function mostraImmagine(immagini) {
    const pic = document.createElement('IMG');
    pic.classList.add('pic');
    // pic.classList.add('ombre');
    const immagine = _.get(immagini, 'data.photos[0].image.web');
    pic.setAttribute('src', immagine);
    resultsBox.appendChild(pic);
};

// 2
export async function mostraSommario(risultati) {
    const summary = document.createElement('DIV');
    summary.classList.add('addedEl');
    // summary.classList.add('ombre');
    summary.classList.add('summary');
    const sommario = _.get(risultati, 'data.summary');
    summary.innerHTML = `${sommario}`;
    resultsBox.appendChild(summary);
};

// 3
export async function mostraPunteggi(risultati) {
    const categoriesBox = document.createElement('DIV');
    categoriesBox.classList.add('categoriesBox');
    // categoriesBox.classList.add('ombre');
    resultsBox.appendChild(categoriesBox);
    // creo un loop che crei un div per ogni categoria di punteggio
    // esempio struttura che ne risulta:
    // <div class="category">
    //     <span class="name">HOUSING</span>
    //     <div class="outer">   
    //         <div class="inner"></div>
    //     </div>
    //     <span class="score">9.1/10</span>
    // </div>
    for (let i = 0; i < risultati.data.categories.length; i++) {
        // creo un div
        const category = document.createElement('DIV');
        category.classList.add('addedEl');
        category.classList.add('categories');
        // creo span con nome della categoria
        const name = risultati.data.categories[i].name;
        const nameSpan = document.createElement('SPAN');
        nameSpan.classList.add('name');
        nameSpan.innerText = name;
        // creo span con punteggio
        const score = risultati.data.categories[i].score_out_of_10;
        const scoreSpan = document.createElement('SPAN');
        scoreSpan.classList.add('score');
        scoreSpan.innerText = `${arrotondaNum(score)}/10`;
        // creo i div che costituiranno la barra del punteggio
        const outerBar = document.createElement('DIV');
        outerBar.classList.add('outer');
        const innerBar = document.createElement('DIV');
        innerBar.classList.add('inner');
        // aggiungo alcuni stili dipendenti da dati contenuti nel JSON dei punteggi (colore e lunghezza delle barre)
        const barColor = risultati.data.categories[i].color;
        innerBar.style.backgroundColor = barColor;
        const scorePercent = percentNum(arrotondaNum(score));
        innerBar.style.width = scorePercent;
        outerBar.appendChild(innerBar);

        // appendo tutto
        category.appendChild(nameSpan);
        category.appendChild(outerBar);
        category.appendChild(scoreSpan);
        categoriesBox.appendChild(category);
        resultsBox.appendChild(categoriesBox);
    }
};

// 4
export async function mostraTotale(risultati) {
    const liTotal = document.createElement('DIV');
    liTotal.classList.add('addedEl');
    liTotal.classList.add('ombre');
    liTotal.classList.add('total');
    const total = _.get(risultati, 'data.teleport_city_score');
    liTotal.innerText = `OVERALL SCORE: ${arrotondaNum(total)}`;
    resultsBox.appendChild(liTotal);
};
// 5
export async function mostraLearnMore(moreInfoUrl) {
    const learnMore = document.createElement('A');
    learnMore.classList.add('addedEl');
    // learnMore.classList.add('ombre');
    learnMore.classList.add('button');
    learnMore.innerText = `LEARN MORE`;
    learnMore.setAttribute('href', `${moreInfoUrl}`);
    learnMore.setAttribute('target', '_blank');
    resultsBox.appendChild(learnMore);
};


