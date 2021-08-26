import { useState, useEffect } from 'react'

import axios from "axios"
import { useRecoilState } from 'recoil'
import { characterAbilityScoresAtom } from './atoms/characterAbilityScoresAtom'
import { characterNameAtom } from './atoms/characterNameAtom'
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

  const [, setCharacterName] = useRecoilState(characterNameAtom)
  const [, setCharacterAbilityScores] = useRecoilState(characterAbilityScoresAtom)
  const [, setCharacterSavingThrows] = useRecoilState(characterSavingThrowsAtom)
  const [, setCharacterSkills] = useRecoilState(characterSkillsAtom)
  const [, setCharacterProficiencyBonus] = useRecoilState(characterProficiencyBonusAtom)

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
      setCharacterName(character.name);
      setCharacterSkills(character.skills);
      setCharacterSavingThrows(character.savingThrows);
      setCharacterProficiencyBonus(character.proficiencyBonus);
    
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