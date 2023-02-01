// This const is a collection or array of all the elements with class draggablez
const draggables = document.querySelectorAll('.draggablez')
const containers = document.querySelectorAll('.container')
 

// THIS FOR EACH ADDS THE FOLLOWER PROPERTIES AND LOGIC FOR ALL ELEMENTS 
// WITH THE TAG OF DRAGGABLEZ
draggables.forEach(draggablez => {
    // IN EACH CLASS OF DRAGGABLEZ WE ARE ADDING AND EVENT LISTENER

    // THIS IS WHEN WE START DRAGGING AN ELEMENT
    draggablez.addEventListener('dragstart',()=> {
        //console.log('drag has started');
        // we are adding a class of dragging to all classes named 
        // draggablez when the event of dragstart is fired
        draggablez.classList.add('dragging')
    })

    // THIS IS WHEN WE ARE DONE DRAGGING AN ELEMENT
    draggablez.addEventListener('dragend',()=>{
        draggablez.classList.remove('dragging')
    })
})

containers.forEach(container =>{
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggablez = document.querySelector('.dragging')
        container.appendChild(draggable)
         
    })
})

function getDragAfterElement(container, y){

    // creates an array using the spread function ([...])
    const draggableElements = [...container.querySelectorAll('.draggablez:not(.dragging)')]

    draggableElements.reduce((closest, child)=>{
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        console.log(offset)
    }, {offset: Number.POSITIVE_INFINITY })

}