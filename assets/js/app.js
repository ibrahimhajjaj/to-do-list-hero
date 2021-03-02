// Setting Variables
      //    Add List Button
const add_list = document.getElementById('create-list'),
      // New list text
      n_list_text = document.getElementById("n_list_text"),
      // Lists Wrapper Selector
      list_wrapper = document.querySelectorAll('#list-wrapper ol')[0],
      // #Actions 1 - Clear Completed Selector
      clear_completed = document.getElementById("clear-completed"),
    // #Actions 2 - Empty List Selector
      empty_list = document.getElementById("clear-list");


// Add New List item
add_list.addEventListener('click', function (e) {
    var html = "<li><p>"+ n_list_text.value +"</p></li>";
    list_wrapper.insertAdjacentHTML('afterbegin',html);
    n_list_text.value = '';
})

// Mark list as completed

document.addEventListener('click', function (e) {
    if (e.target.nodeName == 'P') {
        if (hasClass(e.target.parentNode, 'done')) {
            e.target.parentNode.classList.toggle('done');
        }else if (!hasClass(e.target.parentNode, 'done')) {
            e.target.parentNode.classList.toggle('done');
        }
    }
});


// Clear All Completed List

clear_completed.addEventListener('click', function (e) {
    // Completed Lists
    const completed_elements = document.querySelectorAll('#list-wrapper ol .done');
    if (completed_elements.length > 0) { // Don't execute unless there is at least one completed element
        for (var i = 0; i < completed_elements.length; i++) {
            completed_elements[i].remove();
        }
    }
})


// Clear All The List

empty_list.addEventListener('click', function (e) {
    // Lists Selectors
    const list_elem = document.querySelectorAll('#list-wrapper li');
    if (list_elem.length > 0){ // Don't execute unless there is at least one list
        for (var i = 0; i < list_elem.length; i++) {
            list_elem[i].remove();
        }
    }
})



// Has class function
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

