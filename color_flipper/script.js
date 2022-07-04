// get div
let newDivColor = document.getElementById('divColor')

// get button
let newButton = document.getElementById('buttonColor')


newButton.addEventListener('click', function changeColor() {

  let initialColor = newDivColor.style.backgroundColor ;

    if ( initialColor == 'red') {

        newDivColor.style.backgroundColor = "green"
        
    }

    else {
        newDivColor.style.backgroundColor = "red"
        
    }

    
})