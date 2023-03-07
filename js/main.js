'use strict';

// Milestone 1
// Array Team
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

// Milestone 2
// Stampiamo le informazioni nel Dom come stringhe
console.log(team[4].ruolo)

// Selezioniamo il container
const teamHtml= document.querySelector('.container');

// Creo un ciclo for che selezionerà tutti gli elementi dell'array Team
for(let i=0; i < team.length;i++){
    // Stampiamo nel Dom
    const stringhe = document.createElement('div');
    stringhe.className='stringhe';
    teamHtml.append(stringhe);
    stringhe.innerHTML=`<h3>${team[i].nome}</h3><p>${team[i].ruolo}</p>`
}