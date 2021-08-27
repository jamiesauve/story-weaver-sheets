import { 
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from "styled-components"
import _throttle from "lodash.throttle"

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

const ScrollContainer = styled.div`
  flex-grow: 1;
  
  display: flex;
  flex-direction: column;

  overflow: scroll;
`

const ListItem = styled.div`
  margin: .3rem 0;
`

const ScrollBackArrow = styled.div`
  width: 0;
  height: 0;

  align-self: center;

  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${props => props.isVisible 
    ? `rgba(255, 255, 255, 0.4)` 
    : `transparent`
  };
  border-left: 10px solid transparent;
`

const ScrollFurtherArrow = styled.div`
  width: 0;
  height: 0;

  align-self: center;

  border-top: 10px solid ${props => props.isVisible 
    ? ` rgba(255, 255, 255, 0.4)` 
    : `transparent`
  };
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
`

const ScrollableList = (props) => {
  const ref = useRef(null);
  const [currentScrollLandmark, setCurrentScrollLandmark] = useState("top");

  const checkScrollPosition = _throttle(
    () => {
      const scrollingDiv = ref.current;

      if (scrollingDiv.scrollTop === 0) {
        setCurrentScrollLandmark("top")
      }
      else if (scrollingDiv.clientHeight + scrollingDiv.scrollTop === scrollingDiv.scrollHeight) {
        setCurrentScrollLandmark("bottom")
      } else {
        setCurrentScrollLandmark(null)
      } 
    },
    100
  )

  useEffect(() => {
    const scrollingDiv = ref?.current ?? null;

    if (scrollingDiv !== null) {
      scrollingDiv.addEventListener("scroll", checkScrollPosition);

      return () => {
        scrollingDiv.removeEventListener("scroll", checkScrollPosition);
      }
    }
  }, [
    checkScrollPosition,
    ref,
  ])

  return (
    <This>
      <ScrollBackArrow 
        isVisible={currentScrollLandmark !== "top"}
      />

      <ScrollContainer 
        className="ScrollableList"
        ref={ref}
      >
        {props.children.map((item, index) => (
          <ListItem
            key={index}
          >
            {item}
          </ListItem>
        ))}

      </ScrollContainer>
      
      <ScrollFurtherArrow
        isVisible={currentScrollLandmark !== "bottom"}
      /> 
    </This>
  )
}

export default ScrollableList;