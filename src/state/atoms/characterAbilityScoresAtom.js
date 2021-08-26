import { 
  atom,
  selector,
} from 'recoil';

export const characterAbilityScoresAtom = atom({
  key: 'characterAbilityScoresAtom',
  default: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
});

export const characterAbilityScoresAsArraySelector = selector({
  key: `characterAbilityScoresAsArraySelector`,
  get: ({get}) => Object.values(get(characterAbilityScoresAtom)),
})

export const characterAbilityScoreModifiersAsArraySelector = selector({
  key: `characterAbilityScoreModifiersAsArraySelector`,
  get: ({get}) => {
    const abilityScores = Object.values(get(characterAbilityScoresAtom));

    const abilityScoreModifiers = abilityScores.map((abilityScore) => Math.floor((abilityScore - 10) / 2))
    return abilityScoreModifiers;
  },
})

export const characterAbilityScoreModifiersAsObjectSelector = selector({
  key: `characterAbilityScoreModifiersAsObjectSelector`,
  get: ({get}) => {
    const characterAbilityScoreModifiersAsArray = get(characterAbilityScoreModifiersAsArraySelector);
    const characterAbilityScores = get(characterAbilityScoresAtom);
    const characterAbilityScoreModifiersAsObject =  Object.keys(characterAbilityScores).reduce((aggr, abilityScoreName, index) => {
      return {
        ...aggr,
        [abilityScoreName]: characterAbilityScoreModifiersAsArray[index],
      }
    }, {})

    return characterAbilityScoreModifiersAsObject
  }
})

