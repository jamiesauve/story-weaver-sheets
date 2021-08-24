import React from 'react';
import styled from 'styled-components';

import Box from '../components/ui/Box'

import contentsConfig from '../components/content/index'

const Layout = styled.div `
  max-width: 1500px;
  width: 90%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 500px; // might be able to have this set by content later
  grid-gap: 40px;

  margin: 40px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const getHeaderColorFromLocalStorage = () => null

const CharacterSheet = (props) => {
  let boxes = []

  contentsConfig.forEach((config) => {
    boxes.push(
      <Box 
        Component={config.Component}
        headerColor={getHeaderColorFromLocalStorage(config.id) ?? config.defaultHeaderColor}
        key={config.id} 
        symbolValue={config.symbolValue}
        title={config.label}
      />
    )
  })

  return (
    <Layout>
      {boxes}
    </Layout>
  )
}

export default CharacterSheet