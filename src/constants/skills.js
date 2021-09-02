import { abilityScoresAsObject } from "./abilityScores";

export const skills = [
  {
    associatedAbilityScore: abilityScoresAsObject.dexterity.name,
    label: `Acrobatics`,
    name: 'acrobatics',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.wisdom.name,
    label: `Animal Handling`,
    name: 'animalHandling',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.intelligence.name,
    label: `Arcana`,
    name: 'arcana',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.strength.name,
    label: `Athletics`,
    name: 'athletics',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.charisma.name,
    label: `Deception`,
    name: 'deception',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.intelligence.name,
    label: `History`,
    name: 'history',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.wisdom.name,
    label: `Insight`,
    name: 'insight',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.charisma.name,
    label: `Intimidation`,
    name: 'intimidation',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.intelligence.name,
    label: `Investigation`,
    name: 'investigation',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.wisdom.name,
    label: `Medicine`,
    name: 'medicine',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.intelligence.name,
    label: `Nature`,
    name: 'nature',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.wisdom.name,
    label: `Perception`,
    name: 'perception',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.charisma.name,
    label: `Performance`,
    name: 'performance',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.charisma.name,
    label: `Persuasion`,
    name: 'persuasion',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.intelligence.name,
    label: `Religion`,
    name: 'religion',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.dexterity.name,
    label: `Sleight of Hand`,
    name: 'sleightOfHand',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.dexterity.name,
    label: `Stealth`,
    name: 'stealth',
  },
  {
    associatedAbilityScore: abilityScoresAsObject.wisdom.name,
    label: `Survival`,
    name: 'survival',
  },
];

export const skillsAsLabels = skills.map((skill) => skill.label);
