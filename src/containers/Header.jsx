import styled from "styled-components";

import { useRecoilValue } from "recoil";

import { characterNameAtom } from '../state/atoms/generalCharacterDataAtom';

import { THEME_OPTIONS } from "../constants/themeOptions";

const This = styled.div`
  width: 100%;
`

const TopRow = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  font-size: ${props => props.theme.header.fontSize};

  padding: 0.5rem;

  box-sizing: border-box;
`

const BottomRow = styled.div`
  text-align: center;

  font-size: 3rem;
  margin-top: 1rem;

  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`

const Logo = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LogoIcon = styled.img`
  height: 3rem;
  width: 3rem;

  margin-right: 0.2rem;
`

const LogoLabel = styled.div`
font-size: 1.5rem;
line-height: 1.5rem;

@media screen and (min-width: 600px) {
  font-size: 2rem;
}
`

const ToggleThemeButton = styled.button `
  border-radius: 5px;

  font-size: 0.7rem;

  @media screen and (min-width: 600px) {
    top: 5px;
    font-size: 1rem;
  }
`

const Header = (props) => {
  const characterName = useRecoilValue(characterNameAtom)

  const {
    toggleTheme,
    currentTheme,
  } = props

  return (
    <This className="Header">
      <TopRow>
        <Logo>
          <LogoIcon src="./assets/logo192.png" />

          <LogoLabel>
            Storyweaver Sheets
          </LogoLabel>
        </Logo>
        
        <ToggleThemeButton 
          onClick={toggleTheme}
        >
          {currentTheme === THEME_OPTIONS.DARK ? `Use Light Mode` : `Use Dark Mode`} 
        </ToggleThemeButton>
      </TopRow>

      <BottomRow>
        {characterName}
      </BottomRow>
    </This>
  )
}

export default Header;