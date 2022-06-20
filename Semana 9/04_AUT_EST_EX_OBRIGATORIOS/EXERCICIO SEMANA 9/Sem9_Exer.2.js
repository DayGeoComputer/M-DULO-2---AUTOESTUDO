function submit() {
    var number = Number(document.getElementById("number").value);

    if(number === parseInt(number) && number > 0) {
        var numberString = String(number).split('')

        separatedNumbers = numberString.map(function(element) {
            return Number(element);
        })

        var sum = 0;
        separatedNumbers.forEach(number => {
            sum += number;
        }) 
        document.getElementById("result").innerHTML = sum;
    } else {
        alert("Número não é inteiro e positivo.");
    }
}
