import { useRecoilValue } from "recoil"
import { characterSkillsAtom } from "../../state/atoms/characterSkillsAtom"

const Skills = () => {
  const characterSkills = useRecoilValue(characterSkillsAtom)

  return (
    <div>
      {characterSkills}
    </div>
  )
}

export default Skills