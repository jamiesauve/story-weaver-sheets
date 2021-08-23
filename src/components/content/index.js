import AbilityScores from './AbilityScores';
import Skills from './Skills';

export default [
  {
    id: 0,
    Component: AbilityScores,
    defaultHeaderColor: `#955`,
    label: "Ability Scores",
    symbolValue: "A", // badge
  },
  {
    id: 1,
    Component: Skills,
    defaultHeaderColor: `#559`,
    label: "Skills",
    symbolValue: "u", // ship's wheel
  }
]