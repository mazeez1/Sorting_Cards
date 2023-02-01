// This const is a collection or array of all the elements with class draggablez
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')




// THIS FOR EACH ADDS THE FOLLOWER PROPERTIES AND LOGIC FOR ALL ELEMENTS 
// WITH THE TAG OF DRAGGABLEZ
draggables.forEach(draggable => {

    // IN EACH CLASS OF DRAGGABLEZ WE ARE ADDING AND EVENT LISTENER

    // THIS IS WHEN WE START DRAGGING AN ELEMENT
  draggable.addEventListener('dragstart', () => {

        //console.log('drag has started');
        // we are adding a class of dragging to all classes named 
        // draggablez when the event of dragstart is fired
    draggable.classList.add('dragging')
  })


    // THIS IS WHEN WE ARE DONE DRAGGING AN ELEMENT
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {


    // creates an array using the spread function ([...])
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}