import { 
  atom,
  selector,
} from 'recoil'

import { characterAbilityScoreModifiersAsObjectSelector } from './characterAbilityScoresAtom';
import { characterProficiencyBonusAtom } from './characterProficiencyBonusAtom';

import { skills } from '../../constants/skills'

export const characterSkillsAtom = atom({
  key: `characterSkillsAtom`,
  default: [],
});

export const characterSkillModifiersAsArraySelector = selector({
  key: `characterSavingThrowModifiersSelector`,
  get: ({get}) => {
    const abilityScoreModifiersAsObject = get(characterAbilityScoreModifiersAsObjectSelector);
    const proficientSkills = get(characterSkillsAtom);
    const proficiencyBonus = get(characterProficiencyBonusAtom);

    return skills.map((skill) => {
      if (proficientSkills.includes(skill.name)) {
        return abilityScoreModifiersAsObject[skill.associatedAbilityScore] + proficiencyBonus
      } else {
        return abilityScoreModifiersAsObject[skill.associatedAbilityScore]
      }
    })
  },
})