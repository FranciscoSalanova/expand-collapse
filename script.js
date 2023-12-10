document.addEventListener('click', e => {
    // todo aquel elemento que no se un botón Expand/Collapse será ignorado
    if (!e.target.matches('.expand-button')) return

    const card = e.target.closest('.card')
    const cardBody = card.querySelector('.card-body')
    cardBody.classList.toggle('show')

    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'
})
