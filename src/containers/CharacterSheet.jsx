import React from 'react';
import styled from 'styled-components';

const Layout = styled.div `
  max-width: 1500px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 500px; // might be able to have this set by content later

  grid-gap: 20px;

  margin: 40px;
`

const Box = styled.section`
  background: ${props => props.theme.box.background};
  border: 1px solid ${props => props.theme.global.borderColor};

`

const CharacterSheet = (props) => {
  let boxes = [];

  for (let i = 0; i < 15; i++) {
    boxes.push(
      <Box key={i} />
    )
  }
  return (
    <Layout>
      {boxes}
    </Layout>
  )
}

export default CharacterSheet