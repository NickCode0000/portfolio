const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)

        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = ''; // Herstel standaard scrollgedrag
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)

        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = 'hidden'; // Verwijder scrollen
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)

        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = ''; // Herstel standaard scrollgedrag
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add("active")
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove("active")
}