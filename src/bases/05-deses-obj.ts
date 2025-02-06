
interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string; // al poner un ? se convierte en opcional
}


export const persona: Heros = {
    nomen: "Tony",
    aetas: 45,
    codeNomen: "Ironman",
    facultatem: "money"
}

// console.log(persona.nomen);

const { nomen, aetas, facultatem = "No tiene poder"} = persona;
console.log(nomen, aetas, facultatem)