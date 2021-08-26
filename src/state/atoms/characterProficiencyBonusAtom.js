import { 
  atom,
} from 'recoil';

export const characterProficiencyBonusAtom = atom({
  key: `characterProficiencyBonusAtom`,
  default: 0,
});