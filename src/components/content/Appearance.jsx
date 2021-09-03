import RichTextEditor from "../ui/RichTextEditor";
import styled from "styled-components";

import { useRecoilValue } from "recoil";

import { characterAppearanceAtom } from "../../state/atoms/characterAppearanceAtom";

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

const Appearance = () => {
  const characterAppearance = useRecoilValue(characterAppearanceAtom)

  return (
    <This className="Appearance">
      <RichTextEditor
        initialValue={characterAppearance}
      />
    </This>
  )
}

export default Appearance