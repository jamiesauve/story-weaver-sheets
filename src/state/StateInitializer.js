import { useState, useEffect } from 'react'

import axios from "axios"
import { useRecoilState } from 'recoil'
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
    
      setCharacterAbilityScores(character.abilityScores);
      setCharacterSavingThrows(character.savingThrows);
      setCharacterProficiencyBonus(character.proficiencyBonus);
    
      setHasStateInitialized(true)
    }

    initializeState()
  }, [
    characterId,
    setCharacterAbilityScores,
    setCharacterSavingThrows,
  ])

  return (
    hasStateInitialized
    ? children
    : "NO"
  )
}

export default StateInitializer