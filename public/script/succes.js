/* eslint-disable quotes */
const submit = document.querySelector('form');

//dom manipulatie
function melding(event) {
    confirm("Successfully added!");
    event.submit();
}


// EventListeners
submit.addEventListener('submit' , melding) ;
