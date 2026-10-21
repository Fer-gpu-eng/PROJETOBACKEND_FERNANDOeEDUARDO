// Catálogo expandido de músicas para permitir recomendações verdadeiramente aleatórias
const musicDatabase = {
"Rock": [
{ title: "Bohemian Rhapsody", artist: "Queen" },
{ title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
{ title: "Smells Like Teen Spirit", artist: "Nirvana" },
{ title: "Back In Black", artist: "AC/DC" },
{ title: "Hotel California", artist: "Eagles" },
{ title: "Comfortably Numb", artist: "Pink Floyd" },
{ title: "In the End", artist: "Linkin Park" },
{ title: "Livin' on a Prayer", artist: "Bon Jovi" },
{ title: "Highway to Hell", artist: "AC/DC" },
{ title: "Under the Bridge", artist: "Red Hot Chili Peppers" }
],
"Pop": [
{ title: "Blinding Lights", artist: "The Weeknd" },
{ title: "Levitating", artist: "Dua Lipa" },
{ title: "Shape of You", artist: "Ed Sheeran" },
{ title: "Bad Guy", artist: "Billie Eilish" },
{ title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
{ title: "As It Was", artist: "Harry Styles" },
{ title: "Flowers", artist: "Miley Cyrus" },
{ title: "Save Your Tears", artist: "The Weeknd" },
{ title: "Cruel Summer", artist: "Taylor Swift" },
{ title: "Starboy", artist: "The Weeknd ft. Daft Punk" }
],
"Jazz": [
{ title: "Take Five", artist: "Dave Brubeck" },
{ title: "Fly Me to the Moon", artist: "Frank Sinatra" },
{ title: "So What", artist: "Miles Davis" },
{ title: "Feeling Good", artist: "Nina Simone" },
{ title: "What a Wonderful World", artist: "Louis Armstrong" },
{ title: "My Favorite Things", artist: "John Coltrane" },
{ title: "Cantaloupe Island", artist: "Herbie Hancock" },
{ title: "Autumn Leaves", artist: "Bill Evans" },
{ title: "Cheek to Cheek", artist: "Ella Fitzgerald & Louis Armstrong" },
{ title: "Unforgettable", artist: "Nat King Cole" }
],
"Hip-Hop": [
{ title: "Lose Yourself", artist: "Eminem" },
{ title: "HUMBLE.", artist: "Kendrick Lamar" },
{ title: "SICKO MODE", artist: "Travis Scott" },
{ title: "Juicy", artist: "The Notorious B.I.G." },
{ title: "God's Plan", artist: "Drake" },
{ title: "N.Y. State of Mind", artist: "Nas" },
{ title: "All of the Lights", artist: "Kanye West" },
{ title: "Without Me", artist: "Eminem" },
{ title: "Money Trees", artist: "Kendrick Lamar" },
{ title: "Gangsta's Paradise", artist: "Coolio" }
],
"Eletrônica": [
{ title: "Titanium", artist: "David Guetta ft. Sia" },
{ title: "Strobe", artist: "deadmau5" },
{ title: "Levels", artist: "Avicii" },
{ title: "Faded", artist: "Alan Walker" },
{ title: "Get Lucky", artist: "Daft Punk" },
{ title: "One More Time", artist: "Daft Punk" },
{ title: "Animals", artist: "Martin Garrix" },
{ title: "Closer", artist: "The Chainsmokers" },
{ title: "Scared to Be Lonely", artist: "Martin Garrix & Dua Lipa" },
{ title: "Don't You Worry Child", artist: "Swedish House Mafia" }
],
"MPB": [
{ title: "Apesar de Você", artist: "Chico Buarque" },
{ title: "Águas de Março", artist: "Elis Regina e Tom Jobim" },
{ title: "A Menina Dança", artist: "Novos Baianos" },
{ title: "Carinhoso", artist: "Pixinguinha" },
{ title: "Construção", artist: "Chico Buarque" },
{ title: "Como Nossos Pais", artist: "Elis Regina" },
{ title: "Sozinho", artist: "Caetano Veloso" },
{ title: "Anunciação", artist: "Alceu Valença" },
{ title: "Sampa", artist: "Caetano Veloso" },
{ title: "Tarde em Itapuã", artist: "Toquinho e Vinicius de Moraes" }
]
};

// Dicionário de tradução de interface
const translations = {
pt: {
navHome: "/HOME",
navConfig: "/CONFIG",
navAbout: "/SOBRE NÓS",
navContact: "/CONTATO",
homeHeroTitle: "Descubra suas próximas músicas favoritas",
homeHeroDesc: "Selecione um gênero musical para receber 5 recomendações aleatórias com links diretos para ouvir.",
homeSelectGenre: "Gêneros Musicais",
homeBtnRecommend: "Recomendar 5 Músicas Aleatórias",
homePlaceholder: "Selecione um gênero e clique no botão acima para ver as sugestões.",
listenBtn: "Ouvir no YouTube ➔"
},
en: {
navHome: "/HOME",
navConfig: "/CONFIG",
navAbout: "/ABOUT US",
navContact: "/CONTACT",
homeHeroTitle: "Discover your next favorite songs",
homeHeroDesc: "Select a music genre to receive 5 random recommendations with direct links.",
homeSelectGenre: "Music Genres",
homeBtnRecommend: "Recommend 5 Random Songs",
homePlaceholder: "Select a genre and click the button above to view suggestions.",
listenBtn: "Listen on YouTube ➔"
},
es: {
navHome: "/INICIO",
navConfig: "/CONFIG",
navAbout: "/NOSOTROS",
navContact: "/CONTACTO",
homeHeroTitle: "Descubre tus próximas canciones favoritas",
homeHeroDesc: "Selecciona un género musical para recibir 5 recomendaciones aleatorias con enlaces directos.",
homeSelectGenre: "Géneros Musicales",
homeBtnRecommend: "Recomendar 5 Canciones Aleatorias",
homePlaceholder: "Selecciona un género y haz clic en el botón para ver sugerencias.",
listenBtn: "Escuchar en YouTube ➔"
},
it: {
navHome: "/HOME",
navConfig: "/CONFIG",
navAbout: "/CHI SIAMO",
navContact: "/CONTATTI",
homeHeroTitle: "Scopri le tue prossime canzoni preferite",
homeHeroDesc: "Seleziona un genere musicale per ricevere 5 raccomandazioni casuali con link diretti.",
homeSelectGenre: "Generi Musicali",
homeBtnRecommend: "Consiglia 5 Canzoni Casuali",
homePlaceholder: "Seleziona un genere e fai clic sul pulsante in alto per vedere i suggerimenti.",
listenBtn: "Ascolta su YouTube ➔"
}
};

// Função para gerar link direto e funcional de busca no YouTube
function createSearchUrl(artist, title) {
const query = encodeURIComponent(`${artist} ${title}`);
return `https://www.youtube.com/results?search_query=${query}`;
}

// Função para selecionar N elementos aleatórios sem repetição
function getRandomSongs(genre, count = 5) {
const pool = musicDatabase[genre] || [];
const shuffled = [...pool].sort(() => 0.5 - Math.random());
return shuffled.slice(0, count);
}

document.addEventListener("DOMContentLoaded", () => {
// 1. Carregar preferências salvas de tema, alto contraste e idioma
const savedTheme = localStorage.getItem("amusing_theme") || "dark";
const savedContrast = localStorage.getItem("amusing_contrast") === "true";
const savedLang = localStorage.getItem("amusing_lang") || "pt";

if (savedTheme === "light") document.body.classList.add("light-theme");
if (savedContrast) document.body.classList.add("high-contrast");

// Aplicar idiomas na interface
const langData = translations[savedLang] || translations.pt;
document.querySelectorAll("[data-key]").forEach(element => {
const key = element.getAttribute("data-key");
if (langData[key]) {
element.textContent = langData[key];
}
});

// 2. Lógica de seleção de gênero
const genreButtons = document.querySelectorAll(".genre-btn");
genreButtons.forEach(btn => {
btn.addEventListener("click", () => {
genreButtons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");
});
});

// 3. Lógica para sortear e exibir 5 músicas aleatórias com links funcionais
const btnRecomendar = document.getElementById("btn-recomendar");
const resultadoContainer = document.getElementById("resultado");

btnRecomendar.addEventListener("click", () => {
const activeGenreBtn = document.querySelector(".genre-btn.active");
const genre = activeGenreBtn ? activeGenreBtn.getAttribute("data-genre") : "Rock";

// Obtém 5 músicas aleatórias do gênero selecionado
const randomSongs = getRandomSongs(genre, 5);
const listenText = langData.listenBtn || "Ouvir no YouTube ➔";

let htmlContent = `<div class="songs-container">`;

randomSongs.forEach((song, index) => {
const musicUrl = createSearchUrl(song.artist, song.title);
htmlContent += `
<div class="song-card">
<div class="song-info">
<span class="song-number">#${index + 1}</span>
<div class="song-details">
<h3>${song.title}</h3>
<p>${song.artist}</p>
</div>
</div>
<a href="${musicUrl}" target="_blank" rel="noopener noreferrer" class="song-link">${listenText}</a>
</div>
`;
});

htmlContent += `</div>`;
resultadoContainer.innerHTML = htmlContent;
});
});
