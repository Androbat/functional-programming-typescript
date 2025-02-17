function find<T>(arr: T[], filter: (i: T) => boolean) {
    return arr.filter(filter);
}

// find(heroes, (h) => h.name === "spider");

function findElement<T>(filter: (idx: T) => boolean) {
    return (arr: T[]) => {
        return arr.filter(filter);
    }
}


// The following function just returns the value of an object
function getValueOnHashMap<Key, Value extends keyof Key>(obj: Key, value: Value): Key[Value] {
    return obj[value];
}




interface FindCallBackFn<T> {
    findValue: (entry: [keyof T, T[keyof T]]) => boolean;
}


interface FindCallBackFn<T> {
    findValue: (entry: [keyof T, T[keyof T]]) => boolean;
}


function findSpecifiedValueOnHashMap<T extends object>(
    findTargetValue: FindCallBackFn<T>
) {
    return function (obj: T) {
        return Object.entries(obj).find(([key, value]) =>
            findTargetValue.findValue([key as keyof T, value as T[keyof T]])
        );
    };
}



function addition(x: number, y: number, add: (first: number, sec: number) => number){
    return add(x, y);
}

console.log(addition(2, 2, (x, y) => x / y));

// Example object
const obj = {
    name: "Manuel",
    lastname: "Reyes"
};


const findByName = findSpecifiedValueOnHashMap({
    findValue: ([key, value]) => key === "name" && value === "Manuel"
});

console.log(findByName(obj)); // ["name", "Manuel"]

