import { random } from "./sort.util";

const SUFFIX = 'casas';

export const resources = [
    'Pule',
    'Volte'
]

export function sortStarResource() {
    let star = resources[random(0,1)];
    star = `${star} ${random(1,5)} ${SUFFIX}`
    return star;
}
