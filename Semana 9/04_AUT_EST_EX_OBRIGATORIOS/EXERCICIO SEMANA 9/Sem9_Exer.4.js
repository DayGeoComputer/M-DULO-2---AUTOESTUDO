function Fibonacci(){
    var n = document.getElementById("sequencia").value;
    console.log(n)
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;

    var i = 2;
    while( i < n) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    i++
    }

    document.getElementById("resultado").innerHTML = "A sequência de fibonacci é " + fibonacci;
}