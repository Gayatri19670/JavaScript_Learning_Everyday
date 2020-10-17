console.log("JavaScript_Learning_Day-30");

// AJAX: Asynchronous JavaScript and XML

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    //Instantiate an xhr object

    const xhr = new XMLHttpRequest();

    // Open the objects
    xhr.open('GET', 'harry.txt', true);

    // what to do on ProgressEvent(optional)
    xhr.onprogress = function() {
        console.log('on progress');
    }

    xhr.onreadystatechange = function() {
            console.log('Ready state is', xhr.readyState);
        }
        // what to do response is ready
    xhr.onload = function() {
            if (this.status === 200) {
                console.log('this.responseText');
            } else {
                console.log('Some error occured');
            }

        }
        // send the request
    xhr.send();

}
console.log('Happy_Learning_JavaScript');