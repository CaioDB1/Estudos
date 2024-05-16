const delay = (ms, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);  
        }, ms);
    });
}

const getValue = async () => {
    const value = await delay(2000, 10);  
    console.log(value);  
}

getValue();


const sequentialTasks = async () => {
    await delay(500);
    console.log('Etapa 1 concluida');
    await delay(1000);
    console.log('Etapa 2 concluida');
}

sequentialTasks();