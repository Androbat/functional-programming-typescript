interface User {
    age: number;
    name: string;
}


function get(users: User[], reduce: (acc: number, curr: User) => number) { 
    return users.reduce(reduce, 0); 
}

const users = [
    { age: 18, name: "Remo" },
    { age: 18, name: "Leo" },
    { age: 1, name: "Remo" }
];
const count = get(users, (acc, curr) => {
    if (curr.age >= 18){
        return acc + 1;
    }
    return acc;
});

console.log(count);