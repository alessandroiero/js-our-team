'use strict';

// Milestone 1
// Array Team
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// // Milestone 2
// // Stampiamo le informazioni nel Dom come stringhe
// console.log(team[4].ruolo)

// // Selezioniamo il container
// const teamHtml= document.querySelector('.container');

// // Creo un ciclo for che selezionerà tutti gli elementi dell'array Team
// for(let i=0; i < team.length;i++){
//     // Stampiamo nel Dom
//     const stringhe = document.createElement('div');
//     stringhe.className='stringhe';
//     teamHtml.append(stringhe);
//     stringhe.innerHTML=`<h3>${team[i].nome}</h3><p>${team[i].ruolo}</p>`
// }

// Selezioniamo gli elementi Html
const template = document.getElementById('team-template');
const ulContainer = document.getElementById('team');

// Creiamo sempre il ciclo per ogni elemento dell'array
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //duplichiamo il contenuto
    const teamTemplate = template.content.cloneNode(true);

    // inseriamo il contenuto
    teamTemplate.querySelector('.member-img img').src = `img/${member.image}`;
    teamTemplate.querySelector('.member-img img').alt = member.nome;
    teamTemplate.querySelector('.member-name').innerHTML = member.nome;
    teamTemplate.querySelector('.member-role').innerHTML = member.ruolo;

    ulContainer.append(teamTemplate);

}
