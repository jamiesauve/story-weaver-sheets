import { useState, useEffect } from 'react'

import axios from "axios"
import { useRecoilState } from 'recoil'
import { characterAbilityScoresAtom } from './atoms/characterAbilityScoresAtom'
import { 
  characterAlignmentAtom,
  characterBackgroundAtom,
  characterClassesAtom,
  characterExperiencePointsAtom,
  characterNameAtom,
  characterRaceAtom,
} from './atoms/generalCharacterDataAtom'
import { characterSavingThrowsAtom } from './atoms/characterSavingThrowsAtom'
import { characterSkillsAtom } from './atoms/characterSkillsAtom'
import { characterProficiencyBonusAtom } from './atoms/characterProficiencyBonusAtom'

import { API_URL } from "../env";
import parseCharacterFromRawData from './parseCharacterFromRawData'


const StateInitializer = (props) => {
  const {
    characterId,
    children,
  } = props

  const [hasStateInitialized, setHasStateInitialized] = useState(false)

  const [, setCharacterAbilityScores] = useRecoilState(characterAbilityScoresAtom)
  const [, setCharacterAlignment] = useRecoilState(characterAlignmentAtom)
  const [, setCharacterBackground] = useRecoilState(characterBackgroundAtom)
  const [, setCharacterClasses] = useRecoilState(characterClassesAtom)
  const [, setCharacterExperiencePoints] = useRecoilState(characterExperiencePointsAtom)
  const [, setCharacterName] = useRecoilState(characterNameAtom)
  const [, setCharacterProficiencyBonus] = useRecoilState(characterProficiencyBonusAtom)
  const [, setCharacterRace] = useRecoilState(characterRaceAtom)
  const [, setCharacterSavingThrows] = useRecoilState(characterSavingThrowsAtom)
  const [, setCharacterSkills] = useRecoilState(characterSkillsAtom)

  useEffect(() => {
    const initializeState = async () => {
      const { data: rawCharacterData } = await axios({
        method: `GET`,
        url: `${API_URL}/character/${characterId}`,
        headers: {
          'Content-Type': 'application/json',
        }
      })
    
      const character = parseCharacterFromRawData({ rawCharacterData });
    
      setCharacterAbilityScores(character.abilityScores);
      setCharacterAlignment(character.alignment);
      setCharacterBackground(character.background);
      setCharacterClasses(character.classes);
      setCharacterExperiencePoints(character.experiencePoints);
      setCharacterName(character.name);
      setCharacterRace(character.race);
      setCharacterProficiencyBonus(character.proficiencyBonus);
      setCharacterSavingThrows(character.savingThrows);
      setCharacterSkills(character.skills);
    
      setHasStateInitialized(true)
    }

    initializeState()
  }, [
    characterId,
    setCharacterAbilityScores,
    setCharacterName,
    setCharacterProficiencyBonus,
    setCharacterSkills,
    setCharacterSavingThrows,
  ])

  return (
    hasStateInitialized
    ? children
    : "NO"
  )
}

export default StateInitializer