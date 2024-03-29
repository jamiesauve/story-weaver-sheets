import { useState, useEffect } from 'react'

import axios from "axios"
import { useRecoilState } from 'recoil'
import { characterAbilityScoresAtom } from './atoms/characterAbilityScoresAtom'
import { 
  characterAlignmentAtom,
  characterBackgroundAtom,
  characterClassesAtom,
  characterExperiencePointsAtom,
  characterHeightAtom,
  characterNameAtom,
  characterRaceAtom,
  characterSizeAtom,
  characterWeightAtom,
  
} from './atoms/generalCharacterDataAtom'
import { characterAppearanceAtom } from './atoms/characterAppearanceAtom'
import { characterProficiencyBonusAtom } from './atoms/characterProficiencyBonusAtom'
import { characterSavingThrowsAtom } from './atoms/characterSavingThrowsAtom'
import { characterSkillsAtom } from './atoms/characterSkillsAtom'

import { API_URL } from "../env";


const StateInitializer = (props) => {
  const {
    characterId,
    children,
  } = props

  const [hasStateInitialized, setHasStateInitialized] = useState(false)

  const [, setCharacterAbilityScores] = useRecoilState(characterAbilityScoresAtom)
  const [, setCharacterAlignment] = useRecoilState(characterAlignmentAtom)
  const [, setCharacterAppearance] = useRecoilState(characterAppearanceAtom)
  const [, setCharacterBackground] = useRecoilState(characterBackgroundAtom)
  const [, setCharacterClasses] = useRecoilState(characterClassesAtom)
  const [, setCharacterExperiencePoints] = useRecoilState(characterExperiencePointsAtom)
  const [, setCharacterHeight] = useRecoilState(characterHeightAtom)
  const [, setCharacterName] = useRecoilState(characterNameAtom)
  const [, setCharacterProficiencyBonus] = useRecoilState(characterProficiencyBonusAtom)
  const [, setCharacterRace] = useRecoilState(characterRaceAtom)
  const [, setCharacterSavingThrows] = useRecoilState(characterSavingThrowsAtom)
  const [, setCharacterSize] = useRecoilState(characterSizeAtom)
  const [, setCharacterSkills] = useRecoilState(characterSkillsAtom)
  const [, setCharacterWeight] = useRecoilState(characterWeightAtom)

  useEffect(() => {
    const initializeState = async () => {
      const { data: character } = await axios({
        method: `GET`,
        url: `${API_URL}/character/${characterId}`,
        headers: {
          'Content-Type': 'application/json',
          'x-client-app': `storyweaver-sheets`,
        },
      })

      setCharacterAbilityScores(character.abilityScores);
      setCharacterAlignment(character.alignment);
      setCharacterAppearance(character.appearance);
      setCharacterBackground(character.background);
      setCharacterClasses(character.classes);
      setCharacterExperiencePoints(character.experiencePoints);
      setCharacterHeight(character.height);
      setCharacterName(character.name);
      setCharacterRace(character.race);
      setCharacterProficiencyBonus(character.proficiencyBonus);
      setCharacterSavingThrows(character.savingThrows);
      setCharacterSkills(character.skills);
      setCharacterSize(character.size);
      setCharacterWeight(character.weight);
    
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