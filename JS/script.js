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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createGifts() {
    var giftsList = [];
    var bigGiftIndex = 0;
    for (let index = 0; index < 24; index++) {
        var giftBox = document.createElement('div');
        giftBox.classList.add('giftBox');
        if (index===bigGiftIndex) {
            giftBox.classList.add('bigGiftBox');
            bigGiftIndex+=7;
        }
        if (index === 23) {
            giftBox.classList.add('lastGiftBox');
        }
        var texteGift = document.createElement('p');
        texteGift.textContent = index + 1;
        giftBox.appendChild(texteGift);
        giftsList.push(giftBox);
    }
    shuffle(giftsList);  // Mélanger la liste des cadeaux

    // Ajouter les cadeaux mélangés au calendrier de l'avent
    giftsList.forEach(gift => boxAdventCalendar.appendChild(gift));
}

createGifts();
