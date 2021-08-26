export const abilityScores = [
  {
    abbr: 'str',
    label: `Strength`,
    name: 'strength',
  },
  {
    abbr: 'dex',
    label: `Dexterity`,
    name: 'dexterity',
  },
  {
    abbr: 'con',
    label: `Constitution`,
    name: 'constitution',
  },
  {
    abbr: 'int',
    label: `Intelligence`,
    name: 'intelligence',
  },
  {
    abbr: 'wis',
    label: `Wisdom`,
    name: 'wisdom',
  },
  {
    abbr: 'cha',
    label: `Charisma`,
    name: 'charisma',
  },
];

export const abilityScoresAsLabels = abilityScores.map((abilityScore) => abilityScore.label);

export const abilityScoresAsObject = abilityScores.reduce((aggr, abilityScore) => {
  return {
    ...aggr,
    [abilityScore.name]: abilityScore,
  }
}, {})

export const abilityScoreConstants = abilityScores.reduce((aggr, abilityScore) => {
  return {
    ...aggr,
    [abilityScore.name]: abilityScore.name,
  }
}, {})
