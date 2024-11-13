console.log("Hello");

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
    for (let index = 0; index < 24; index++) {
        var giftBox = document.createElement('div');
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
