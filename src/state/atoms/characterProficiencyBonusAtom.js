import { 
  atom,
  selector,
} from 'recoil';

export const characterProficiencyBonusAtom = atom({
  key: `characterProficiencyBonusAtom`,
  default: 0,
});