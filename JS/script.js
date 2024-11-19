const quotes = [
    "N’abandonne jamais, car c’est souvent le dernier coup de clé qui ouvre la serrure. – Paulo Coelho",
    "Tu es plus courageux que tu ne le crois, plus fort que tu ne le penses, et plus intelligent que tu ne l’imagines. – A.A. Milne",
    "Le succès, c’est se lever une fois de plus qu’on est tombé. – Winston Churchill",
    "Ce que tu fais aujourd’hui peut améliorer tous tes lendemains. – Ralph Marston",
    "Crois en toi, même quand personne d’autre ne le fait. – Mary J. Blige",
    "Chaque jour est une chance de faire mieux qu’hier. – Anonyme",
    "Les grandes choses ne viennent pas de la zone de confort. – Roy T. Bennett",
    "Vis comme si tu devais mourir demain, apprends comme si tu devais vivre éternellement. – Mahatma Gandhi",
    "Ce qui ne te tue pas te rend plus fort. – Friedrich Nietzsche",
    "La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui. – Franklin D. Roosevelt",
    "Peu importe la lenteur à laquelle tu avances, tant que tu ne t’arrêtes pas. – Confucius",
    "La vie commence à la fin de ta zone de confort. – Neale Donald Walsch",
    "Un mot gentil peut changer la journée de quelqu’un. – Anonyme",
    "L’acte le plus simple de bonté est plus puissant qu’une intention. – Oscar Wilde",
    "Aime-toi d’abord, et le reste viendra. – Lucille Ball",
    "Les étoiles ne peuvent briller sans obscurité. – D.H. Sidebottom",
    "Un sourire est la lumière dans la fenêtre de ton âme. – Anonyme",
    "Prends soin de toi, tu es la personne avec qui tu passeras le reste de ta vie. – Anonyme",
    "Sois le changement que tu veux voir dans le monde. – Mahatma Gandhi",
    "Un petit geste de gentillesse peut illuminer une journée entière. – Anonyme",
    "La véritable force, c’est d’être doux dans un monde dur. – Anonyme",
    "Chaque petite victoire mérite d’être célébrée. – Anonyme",
    "La compassion est le langage universel du cœur. – Anonyme",
    "Tu es la personne qui a le pouvoir de rendre aujourd’hui merveilleux. – Anonyme"
];

const boxAdventCalendar = document.getElementById('box');
const openedStatus = Array(24).fill(false); // Tableau pour suivre l'état d'ouverture des cadeaux

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createGifts() {
    const giftsList = [];
    const indices = [...Array(24).keys()]; // Tableau des indices 0 à 23
    shuffle(indices); // Mélanger les indices

    // Déterminer les "big gifts"
    const bigGiftIndices = [0, 7, 14, 21]; // Les indices initiaux des gros cadeaux

    for (let i = 0; i < 24; i++) {
        const originalIndex = indices[i]; // L'indice réel associé à ce cadeau
        const giftBox = document.createElement('div');
        giftBox.classList.add('giftBox');

        if (bigGiftIndices.includes(originalIndex)) {
            giftBox.classList.add('bigGiftBox');
        }
        if (originalIndex === 23) {
            giftBox.classList.add('lastGiftBox');
        }

        const texteGift = document.createElement('p');
        texteGift.textContent = originalIndex + 1; // Numéro réel du cadeau
        giftBox.appendChild(texteGift);

        // Ajouter un event listener pour gérer l'ouverture
        giftBox.addEventListener('click', function () {
            if (originalIndex === 0 || openedStatus[originalIndex - 1]) {
                openedStatus[originalIndex] = true; // Marquer ce cadeau comme ouvert
                showQuote(quotes[originalIndex]);
                giftBox.classList.add('opened');
            }
        });

        giftsList.push(giftBox);
    }

    // Ajouter les cadeaux mélangés au calendrier
    giftsList.forEach(gift => boxAdventCalendar.appendChild(gift));
}

function showQuote(quote) {
    // Créer une div pour l'assombrissement
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 1000;

    // Ajouter la citation
    const quoteText = document.createElement('p');
    quoteText.textContent = quote;
    quoteText.style.color = 'white';
    quoteText.style.fontSize = '2rem';
    quoteText.style.textAlign = 'center';
    quoteText.style.margin = '0 20px';

    // Ajouter un event listener pour fermer la citation
    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(quoteText);
    document.body.appendChild(overlay);
}

createGifts();
