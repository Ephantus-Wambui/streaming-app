if (navigator.onLine) {
    console.log('online')
} else {
    window.addEventListener(
        alert("Please connect to internet!")
    )
}

function Darkmode (x) {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

localStorage.setItem("darkmode", Darkmode());

document.body.classList.add(localStorage.getItem("darkmode"));

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()

function fnBrowserDetect(){

    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
        alert("Please use chromium based browser")
    } else if(userAgent.match(/edg/i)){
        browserName = "edge";
        alert("Please use chromium based browser")
    }else{
        browserName="No browser detection";
    }
}

fnBrowserDetect()
