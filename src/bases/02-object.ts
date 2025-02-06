
export const persona = {
    cognomen: "Stark",
    aetas: 45,
    ubiHabitat: {
        urbs: "New York",
        zip: 3456,
        lat: 145678,
        lng: 456789,

    }
}


// const persona2 = persona; duplica pero varían ambos
const persona2 = { ...persona} // crea copia de los componentres de la constante


persona2.cognomen = "Parker";

console.log(persona)
console.log(persona2)