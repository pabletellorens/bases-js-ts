
function salutate(nomen: string): string {
    return `Hola ${nomen}`;
}
const salutate2 = (nomen: string): string => `Hola ${nomen}`;

// console.log(salutate("Fernando"));

// console.log(salutate2("Paco"))

const obtineUsoris = ( uid: string ) => ({
        uid, // la clave se llama igual que el valor = (uid: uid,)
        nomen:"Tony001"
})

// console.log(obtineUsoris("Pablo"))

const heroum = [
    {
        id: 1,
        nomen: "Batman"
    },
    {
        id: 2,
        nomen: "Superman",
        facultatem: "Super fuerza"
    }
];


const heros = heroum.find( item => item.id === 1)

console.log(heros?.facultatem?.toUpperCase());