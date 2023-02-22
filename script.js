
const submitButton = document.getElementById('btn');
const input = document.getElementsByClassName('require1','require2','require3');

for(let i=0; i<input.length;i++){
    input[i].addEventListener("change",(e) => {
        const value=e.currentTarget.value;
        submitButton.disabled= false;
        if (value === ""){
            submitButton.disabled=true;
        }
    });       
}

const inputs = document.getElementsByClassName('requires1','requires2','requires3');

for(let i=0; i<inputs.length;i++){
    inputs[i].addEventListener("change",(e) => {
        const value=e.currentTarget.value;
        submitButton.disabled= false;
        if (value === ""){
            submitButton.disabled=true;
        }
    });       
}
