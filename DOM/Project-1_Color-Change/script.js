const btn = document.querySelectorAll(".button")
const body =document.querySelector('body')
const reset = document.querySelector(".reset")

btn.forEach(function (button){
    button.addEventListener('click', function(event){
        switch(event.target.id){
            case 'grey' :
                body.style.backgroundColor = event.target.id
                break;
            case 'red' :
                body.style.backgroundColor = event.target.id
                break;
            case 'blue' :
                body.style.backgroundColor =event.target.id
                break;
            case 'yellow':
                body.style.backgroundColor= event.target.id
                break;

        }
    })
})

reset.addEventListener("click", function(){
    body.style.backgroundColor = "white"
})