var n1, n2;


function pl(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;


    document.getElementById('ans').innerHTML = Number(n1) + Number (n2);
}



function mi(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;


    document.getElementById('ans').innerHTML = Number(n1) - Number (n2);
}

function mu(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;


    document.getElementById('ans').innerHTML = Number(n1) * Number (n2);
}

function di(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;


    document.getElementById('ans').innerHTML = Number(n1) / Number (n2);
}