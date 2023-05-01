function desafioFibonacci(num) {
    let fibonacci = [0, 1]
    let aux = 1
    for(let i=1; true; i++){
        aux = aux + fibonacci[i-1]
        fibonacci.push(aux)

        let ultimo = fibonacci[fibonacci.length - 1]

        if(ultimo == num){
            return `O número ${num}, pertence a sequência de Fibonacci!`
        } else if (ultimo > num){
            return `Infelizmente o número ${num}, NÃO PERTENCE a sequência de Fibonacci!`
        }
    }
}

console.log(desafioFibonacci(21))
console.log(desafioFibonacci(356))
console.log(desafioFibonacci(2584))
