function inverterString(string){
    let stringInvertida = ""
    let tam = string.length -1

    for(let i=tam; i>=0; i--){
        stringInvertida += string[i]
    }
    
    return stringInvertida
}

console.log(inverterString("Essa string vai ser invertida!"))
console.log(inverterString("Evite usar funções prontas, como, por exemplo, reverse"))