// LAZYNESS or LAZY EVALUATION
function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
   let hero: T | null = null;
   // new Proxy() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   

   const proxy = new Proxy({}, {
    get: (obj, prop) => {
        if (!hero){
            hero = arr.find(filter) || null;
        }
        return hero ? (hero as any)[prop] : null;
    }
   }) 

   return proxy as any;
}

// console.log("A");
// const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");
// console.log("B");
// console.log(spiderman.name);
// console.log("C");