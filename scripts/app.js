// javascript suhtleb brauseriga ja manipuleerib html elemente
// let loob muutujad, loob vahemälus ruumi andmetele. nimi (v..s) vajalik

// select movie poster original image
let moviePoster = document.querySelector('.movie-poster'); // vali dokumendist queryselect abil element klassiga movieposter. Salvestab andmed muutujasse moviePoster
// select modal window layer
let modal = document.querySelector('#myModal'); // lubatud ülakomad ja jutumärgid
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-modal');

// et movie poster reageeriks vajutusele

moviePoster.addEventListener('click', ()=> {  // ootab sündmust klikk. kui klikk tuleb pane käima järgmine käsk. käsk on ploki vahel, 1 plokk teise plokiga ei suhtle
    modal.style.display = 'block'; // kutsutakse esile sest igal html elemendil on style atribuut. avab elemendi ploki, modal akna
    modalImage.src = moviePoster.src; //võrdub pildi allikaga, lisab pildi modalile
});

closeBtn.addEventListener('click', () => {  // ootab klikki
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => { // terve dokument on window. kui window registreerib kliki, siis sulgeb modal akna, aga ainult kui modalist väljaspool klikk teha. jah- läheb edasi
    if(event.target === modal) { // kas klikk toimus modal alal, kui jah siis võib kinni panna
        modal.style.display = 'none'; // teeb nähtamatuks
    }
});