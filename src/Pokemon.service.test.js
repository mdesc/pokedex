import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};

const negativeWeight = -3;

const normalPoundWeight = 36;
const normalKiloWeight = 16.4;

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return null if the weight is not valid (negative)', () => {
        expect(convertPoundsToKilograms(negativeWeight)).toEqual(null);
    })
    it('Should return the converted weight', () => {
        expect(convertPoundsToKilograms(normalPoundWeight)).toEqual(normalKiloWeight);
    })
});

describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});
