import { 
  atom,
  selector,
} from 'recoil';

import { characterAbilityScoreModifiersAsObjectSelector } from './characterAbilityScoresAtom';
import { characterProficiencyBonusAtom } from './characterProficiencyBonusAtom';

export const characterSavingThrowsAtom = atom({
  key: `characterSavingThrowsAtom`,
  default: {
    "strength": false,
    "dexterity": false,
    "constitution": false,
    "intelligence": false,
    "wisdom": false,
    "charisma": false
  },
});

export const characterSavingThrowModifiersAsArraySelector = selector({
  key: `characterSavingThrowModifiersSelector`,
  get: ({get}) => {
    const savingThrowProficiencies = get(characterSavingThrowsAtom);
    const abilityScoreModifiersAsObject = get(characterAbilityScoreModifiersAsObjectSelector);
    const proficiencyBonus = get(characterProficiencyBonusAtom);

    return Object.entries(abilityScoreModifiersAsObject).map((abilityScorePair) => {
      const [abilityScoreName, abilityScoreModifier] = abilityScorePair;

      if (savingThrowProficiencies[abilityScoreName] === true) {
        return abilityScoreModifier + proficiencyBonus;
      } else {
        return abilityScoreModifier;
      }
    })
  },
})