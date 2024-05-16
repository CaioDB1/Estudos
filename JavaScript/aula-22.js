const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}


const aguardar = async () => {
    console.log('Passou', 2**2)
    const resultado = await aguardarComRetorno();
    console.log(resultado);
    console.log('Passou', 2**3)
    console.log('Passou', 2**4)
    console.log('Passou', 2**5)
}

aguardar();