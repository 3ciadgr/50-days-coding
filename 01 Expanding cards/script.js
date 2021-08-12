// Selecting all panel classes
const panels = document.querySelectorAll('.panel')

//Adding active class in the panel class when clicked
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//Removing active class in the panel class when other panel class is clicked
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}