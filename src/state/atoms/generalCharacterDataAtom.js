import { 
  atom,
  selector,
} from 'recoil'

export const characterAlignmentAtom = atom({
  key: `characterAlignmentAtom`,
  default: ``,
});

export const characterBackgroundAtom = atom({
  key: `characterBackgroundAtom`,
  default: ``,
});

export const characterClassesAtom = atom({
  key: `characterClassesAtom`,
  default: {},
});

export const characterExperiencePointsAtom = atom({
  key: `characterExperiencePointsAtom`,
  default: -1,
});

export const characterHeightAtom = atom({
  key: `characterHeightAtom`,
  default: ``,
});

export const characterNameAtom = atom({
  key: `characterNameAtom`,
  default: ``,
});

export const characterRaceAtom = atom({
  key: `characterRaceAtom`,
  default: ``,
});

export const characterSizeAtom = atom({
  key: `characterSizeAtom`,
  default: ``,
});

export const characterWeightAtom = atom({
  key: `characterWeightAtom`,
  default: 0,
});

export const characterTotalLevelSelector = selector({
  key: `characterTotalLevelSelector`,
  get: ({get}) => get(characterClassesAtom).reduce((aggr, classData) => {
    return aggr + classData.level ?? 0
  }, 0),
});