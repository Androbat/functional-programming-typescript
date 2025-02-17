function find<T>(arr: T[], filter:(index: T) => boolean){
    return arr.filter(filter);
}


// console.log(find(["a", "b", "c"], (index) => index === "b"));


