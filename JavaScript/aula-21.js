

const test1 = (callback) => {
    setTimeout(() => {
    console.log('test1')
    }, 202)    
}
const test2 = (callback) => {
    setTimeout(() => {
    console.log('test2')
    }, 200)
    
}
const test3 = (callback) => {
    setTimeout(() => {
    console.log('test3')
    callback();
    }, 100)
}
const test4 = (callback) => {
    setTimeout(() => {
    console.log('test4')
    }, 199)
}

const funcaoCallBack = () => {
    console.log('Callback')
}

test1();
test2();
test3(funcaoCallBack);
test4();