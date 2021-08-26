import { 
  atom,
  selector,
} from 'recoil';

export const characterAbilityScoresAtom = atom({
  key: 'characterAbilityScoresAtom',
  default: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
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
    const characterAbilityScoreModifiersAsObject =  Object.keys(characterAbilityScores).reduce((aggr, abilityScoreAbbr, index) => {
      return {
        ...aggr,
        [abilityScoreAbbr]: characterAbilityScoreModifiersAsArray[index],
      }
    }, {})

    return characterAbilityScoreModifiersAsObject
  }
})

