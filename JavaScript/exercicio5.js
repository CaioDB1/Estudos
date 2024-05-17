process.stdin.setEncoding('utf8');

const soma = (n) => {
    if(n<0 || n>100){
     throw new Error('Valor incorreto')
    }
    if(n === 0){
        return 0;
    }
    return n + soma(n-1)
}

process.stdin.on('data', function(data) {
    try {
        console.log('soma: ', soma(Number(data)))
    } catch (error){
        console.log(error.message)
        process.stdin.pause()
    }
});

