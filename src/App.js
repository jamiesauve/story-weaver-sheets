import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { RecoilRoot } from 'recoil';

import themeConfig from './theme';

import CharacterSheet from './containers/CharacterSheet';
import Header from './containers/Header';
import RollDisplay from './containers/RollDisplay';

import StateInitializer from './state/StateInitializer';

import { THEME_OPTIONS } from './constants/themeOptions';

const Page = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background: ${props => props.theme.global.background};
  
  font-family: ${props => props.theme.global.fontFamily};
  font-size: ${props => props.theme.global.fontSize};
  color: ${props => props.theme.global.color};
`

function App() {
  const [currentTheme, setCurrentTheme] = useState(THEME_OPTIONS.DARK);

  const toggleTheme = () => {
    if (currentTheme === THEME_OPTIONS.LIGHT) {
      setCurrentTheme(THEME_OPTIONS.DARK)
    } else {
      setCurrentTheme(THEME_OPTIONS.LIGHT)
    }
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeConfig[currentTheme]} >
        <StateInitializer characterId={1} >
          <Page className="App">
            <Header 
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />

            <CharacterSheet />
          </Page>

          <RollDisplay />
        </StateInitializer>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
