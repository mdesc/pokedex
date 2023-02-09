export function getFirstAbility(pokemon){
    
    if (pokemon?.abilities[0]){
        return pokemon.abilities[0].ability.name; 
    }
    return null;
}

export function convertPoundsToKilograms(poundsWeight){

    if (poundsWeight < 0){
        return null;
    }

    var kiloWeight = poundsWeight / 2.20;
    
    return parseFloat(kiloWeight.toFixed(1));
}