import { random } from "./sort.util";


const instructions = [
    { icon: 'rotate-left', text: 'Vire para a esquerda' },
    { icon: 'rotate-right', text: 'Vire para a direita' },
    { icon: 'arrow-up-bold', text: 'Vá em frente' },
]

export function sortInstructions() {
    let inst = [];
    for (i = 0; i < 5; i++) {
        inst.push(instructions[random(0, 2)]);
    }
    return inst;
}
