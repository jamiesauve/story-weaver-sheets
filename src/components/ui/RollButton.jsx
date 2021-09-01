import axios from 'axios';
import styled from "styled-components"
import { useRecoilState } from 'recoil'

import { currentRollAtom } from '../../state/atoms/currentRollAtom';

import { API_URL } from '../../env';

const This = styled.div`
  position: relative;
  
  height: 2rem;
  width: 2rem;
`

const D10Background = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
`

const D10Image = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
  background-image: ${props => props.theme.rollButton.imageUrl};
  background-repeat: no-repeat;

  &:hover {
    background-image: ${props => props.theme.rollButton.imageUrlOnHover};
  }
`

const RollButton = (props) => {
  const [, setCurrentRoll] = useRecoilState(currentRollAtom)

  const makeRollApiCall = async (command) => {
    const { data } = await axios({
      headers: {
        'Content-Type': `application/json`,
        'x-client-app': `storyweaver-sheets`,
      },
      method: `GET`,
      url: `${API_URL}/roll/${command}`,
    })

    const isNat1 = Boolean(data.total - data.bonus === 1)
    const isNat20 = Boolean(data.total - data.bonus === 20)

    setCurrentRoll({
      displayLabels: props.displayLabels, 
      isNat1,
      isNat20,
      value: data.total,
    })
  }

  return (
    <This>
      <D10Background />

      <D10Image
        onClick={() => makeRollApiCall(props.command)}
      />
    </This>
  )
}

export default RollButton