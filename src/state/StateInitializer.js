import { useState, useEffect } from 'react'

import axios from "axios"
import { useRecoilState } from 'recoil'
import { characterNameAtom } from './atoms/characterNameAtom'
import { characterAbilityScoresAtom } from './atoms/characterAbilityScoresAtom'
import { characterSavingThrowsAtom } from './atoms/characterSavingThrowsAtom'
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
    
      setCharacterName(character.name);
      setCharacterAbilityScores(character.abilityScores);
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
    setCharacterSavingThrows,
  ])

  return (
    hasStateInitialized
    ? children
    : "NO"
  )
}

export default StateInitializer