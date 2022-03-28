const a = document.querySelector('button.buttonYes')
const b = document.querySelector('button.buttonNo')
b.addEventListener("mouseover", moveHover)
var i;
var j;

function moveHover() {
    do {
        i = Math.floor(Math.random() * 1250) + 1;
    } while (i >= 150 && i <= 700);

    do {
        j = Math.floor(Math.random() * 700) + 1;
    } while (j <= 181 || j > 700);

    b.style.left = i + "px";
    b.style.top = j + "px";
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}