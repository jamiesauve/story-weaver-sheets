import { 
  atom,
  selector,
} from 'recoil';

import { characterAbilityScoreModifiersAsObjectSelector } from './characterAbilityScoresAtom';
import { characterProficiencyBonusAtom } from './characterProficiencyBonusAtom';

export const characterSavingThrowsAtom = atom({
  key: `characterSavingThrowsAtom`,
  default: [],
});

export const characterSavingThrowModifiersAsArraySelector = selector({
  key: `characterSavingThrowModifiersSelector`,
  get: ({get}) => {
    const proficientSavingThrows = get(characterSavingThrowsAtom);
    const abilityScoreModifiersAsObject = get(characterAbilityScoreModifiersAsObjectSelector);
    const proficiencyBonus = get(characterProficiencyBonusAtom);

    return Object.entries(abilityScoreModifiersAsObject).map((abilityScorePair) => {
      const [abilityScoreAbbr, abilityScoreModifier] = abilityScorePair;

      if (proficientSavingThrows.includes(abilityScoreAbbr)) {
        return abilityScoreModifier + proficiencyBonus;
      } else {
        return abilityScoreModifier;
      }
    })
  },
})