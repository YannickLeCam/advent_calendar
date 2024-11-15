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
