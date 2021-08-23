import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import themeConfig from './theme';

import CharacterSheet from './containers/CharacterSheet';

const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
}

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

const Header = styled.header`
  text-align: center;
  
  font-size: ${props => props.theme.header.fontSize};
`

const ToggleThemeButton = styled.button `
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 5px;
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
    <ThemeProvider theme={themeConfig[currentTheme]} >
      <Page className="App">
        <Header>
          Storyweaver Sheets
          
          <ToggleThemeButton 
            onClick={toggleTheme}
          >
            {currentTheme === THEME_OPTIONS.DARK ? `Use Light Mode` : `Use Dark Mode`} 
          </ToggleThemeButton>
        </Header>

        <CharacterSheet />
      </Page>
    </ThemeProvider>
  );
}

export default App;