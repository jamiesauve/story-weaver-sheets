export const abilityScores = [
  {
    abbr: 'STR',
    label: `Strength`,
    name: 'strength',
  },
  {
    abbr: 'DEX',
    label: `Dexterity`,
    name: 'dexterity',
  },
  {
    abbr: 'CON',
    label: `Constitution`,
    name: 'constitution',
  },
  {
    abbr: 'INT',
    label: `Intelligence`,
    name: 'intelligence',
  },
  {
    abbr: 'WIS',
    label: `Wisdom`,
    name: 'wisdom',
  },
  {
    abbr: 'CHA',
    label: `Charisma`,
    name: 'charisma',
  },
];

export const abilityScoresAsLabels = abilityScores.map((abilityScore) => abilityScore.label);
