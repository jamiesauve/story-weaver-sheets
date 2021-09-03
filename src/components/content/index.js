import AbilityScores from './AbilityScores';
import GeneralCharacterData from './GeneralCharacterData';
import Appearance from './Appearance';
import SavingThrows from './SavingThrows';
import Skills from './Skills';

const config = [
  {
    id: 0,
    Component: GeneralCharacterData,
    defaultHeaderColor: `#950`,
    label: "General",
    symbolValue: "a", // strawberry
  },
  {
    id: 1,
    Component: AbilityScores,
    defaultHeaderColor: `#955`,
    label: "Ability Scores",
    symbolValue: "A", // badge
  },
  {
    id: 2,
    Component: SavingThrows,
    defaultHeaderColor: `#575`,
    label: "Saving Throws",
    symbolValue: "C", // shield
  },
  {
    id: 3,
    Component: Skills,
    defaultHeaderColor: `#559`,
    label: "Skills",
    symbolValue: "u", // ship's wheel
  },
  {
    id: 4,
    Component: Appearance,
    defaultHeaderColor: `#299`,
    label: "Appearance",
    symbolValue: "Z", // flower
  },
]

export default config;