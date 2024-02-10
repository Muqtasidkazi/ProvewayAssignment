

// Script to make the card open when click on it
const radios = document.querySelectorAll('input[type="radio"]');
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', function() {
        radios[index].checked = true;
        updateCardState(index); 
    });
});

function updateCardState(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('checked');
        } else {
            card.classList.remove('checked');
        }
    });
}

radios.forEach((radio, index) => {
    radio.addEventListener('change', function() {
        updateCardState(index); 
    });
});




