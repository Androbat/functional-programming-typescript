function addDelay(msg: string, ms: number) {
    return () => {
        setTimeout(() => {
            console.log(msg);
        }, ms);
    };
}

const delayedSayHello = addDelay("Hello world!", 500);
delayedSayHello(); // Prints "Hello world!" (after 500 ms)


function greet(message: string){
    return message;
}

function delay(wait: () => void, times: number) {
    return () => {
        setTimeout(() => { wait() }, times);
    }
}

function add(a: number, b: number, callback: (n: number) => number){
    return callback(a + b);
}

console.log(add(0, 1, (n) => n));
