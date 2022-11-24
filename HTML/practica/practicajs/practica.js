//Asincrono

setTimeout(() => console.log("Tick"), 15);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => (resolve(console.log('Todo cool')),
        reject(new Error('opps'))),
        2000
        )
        
        );


        
async function main() {
    // promesa()
    // .then(() => {
    //     promesa()
    //     .then(() => console.log('hola))  
    //     .catch((error) => console.error(err))
    //     })
    //     .catch((err) => console.error(err))

await promesa();
console.log("aqui termina la primer promesa");
await promesa();
console.log("aqui termina la segunda promesa")

        }


main();