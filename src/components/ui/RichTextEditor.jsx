import { 
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRecoilValue } from 'recoil';

import { isInEditingModeAtom } from '../../state/atoms/isInEditingModeAtom';

// need to get the styled-components theme in here. I wish I could do this properly :/
const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  & .wrapper-class {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
  }

  & .editor-class {
    ${props => props.isInEditingMode ? `border: 1px solid ${props.theme.global.highlight};` : ``}
  }

  & .toolbar-class {
    background: ${props => props.theme.global.highlight};
    border: none;

    & .rdw-option-wrapper, [class^="rdw-dropdown-"] {
      background: ${props => props.theme.richTextEditor.buttonBackgroundColor};
      color: ${props => props.theme.richTextEditor.buttonTextColor};
      border: none;
    }
  }

`

const RichTextEditor = (props) => {
  const [isReadOnly, setIsReadOnly] = useState(true)
  const isInEditingMode = useRecoilValue(isInEditingModeAtom)

  useEffect(() => {
    setIsReadOnly(!isInEditingMode)
  }, [
    isInEditingMode
  ])

  return (
    <This 
      className="RichTextEditor"
      isInEditingMode={isInEditingMode}
    >
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"

        readOnly={isReadOnly}
        toolbarHidden={isReadOnly}

        toolbar={{
          options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
          },
        }}
      />
    </This>
  )
}

export default RichTextEditor