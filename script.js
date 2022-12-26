const pannels = document.querySelectorAll('.pannel');
// console.log(pannels[0])

pannels.forEach((pannel) => {
    pannel.addEventListener('click', () => {
        // pannel.classList.remove('active');
        removeActiveClasses();
        pannel.classList.add('active');
    })
})

const removeActiveClasses = () => {
    pannels.forEach((pannel) => {
        pannel.classList.remove('active');
    })

}