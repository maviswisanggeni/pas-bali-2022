function toggle() {
    let play = document.getElementById('play');

    play.classList.toggle('active');
}

// js buat modal popup overlay
// jangan di rubah kalo gapaham -rangga

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
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

// 2

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = document.querySelector(button.dataset.modalTarget)
        openModal2(modal2)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = button.closest('.modal2')
        closeModal2(modal2)
    })
})

function openModal2(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay.classList.add('active')
}    

function closeModal2(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay.classList.remove('active')
}

// 3

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal3 = document.querySelector(button.dataset.modalTarget)
        openModal3(modal3)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal3 = button.closest('.modal3')
        closeModal3(modal3)
    })
})

function openModal3(modal3) {
    if (modal3 == null) return
    modal3.classList.add('active')
    overlay.classList.add('active')
}    

function closeModal3(modal3) {
    if (modal3 == null) return
    modal3.classList.remove('active')
    overlay.classList.remove('active')
}


function Click() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}