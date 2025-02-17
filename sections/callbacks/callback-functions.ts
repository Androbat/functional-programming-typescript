interface CallBackReturn {
    username: string;
    age: number;
    isActive: boolean;
}

function callbackTestFunction(
    username: string, 
    age: number, 
    isActive: boolean, 
    callback: (username: string, age: number, isActive: boolean) => CallBackReturn
): CallBackReturn {
    return callback(username, age, isActive);
}

const callbackResult = callbackTestFunction("John Doe", 25, true, (username, age, isActive) => {
    return {
        username,
        age,
        isActive
    };
});

console.log(callbackResult); // { username: 'John Doe', age: 25, isActive: true }