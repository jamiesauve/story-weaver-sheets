import { 
  atom,
  selector,
} from 'recoil'

import { characterAbilityScoreModifiersAsObjectSelector } from './characterAbilityScoresAtom';
import { characterProficiencyBonusAtom } from './characterProficiencyBonusAtom';

import { skills } from '../../constants/skills'

export const characterSkillsAtom = atom({
  key: `characterSkillsAtom`,
  default: {
    "acrobatics": false,
    "animalHandling": false,
    "arcana": false,
    "athletics": false,
    "deception": false,
    "history": false,
    "insight": false,
    "intimidation": false,
    "investigation": false,
    "medicine": false,
    "nature": false,
    "perception": false,
    "performance": false,
    "persuasion": false,
    "religion": false,
    "sleightOfHand": false,
    "stealth": false,
    "survival": false
  },
});

export const characterSkillModifiersAsArraySelector = selector({
  key: `characterSkillModifiersAsArraySelector`,
  get: ({get}) => {
    const abilityScoreModifiersAsObject = get(characterAbilityScoreModifiersAsObjectSelector);
    const characterSkillProficiencies = get(characterSkillsAtom);
    const proficiencyBonus = get(characterProficiencyBonusAtom);

    return skills.map((skill) => {
      if (characterSkillProficiencies[skill.name] === true) {
        return abilityScoreModifiersAsObject[skill.associatedAbilityScore] + proficiencyBonus
      } else {
        return abilityScoreModifiersAsObject[skill.associatedAbilityScore]
      }
    })
  },
})