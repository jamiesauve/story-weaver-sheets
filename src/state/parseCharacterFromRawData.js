import { parseSnakeCaseToUpperCaseLabel } from "../utils/stringUtils";

const parseCharacterFromRawData = ({ rawCharacterData }) => {
  const lines = rawCharacterData.split("\n");

  const data = lines.map((line) => {
    const breakpoint = line.indexOf(': ');
    const value = line.substr(breakpoint + 2);

    return value.split(", ");
  })

  const classes = data[3].map((classString) => {
    const args = classString.split(" ");

    const classData = {};
    classData.class = parseSnakeCaseToUpperCaseLabel(args[0]);

    if (isNaN(parseInt(args[1]))) {
      classData.subclass = parseSnakeCaseToUpperCaseLabel(args[1]);
      classData.level = parseInt(args[2])
    } else {
      classData.level = parseInt(args[1])
    }

    return classData;
  })
  
  const character = {
    abilityScores: {
      strength: parseInt(data[7][0]),
      dexterity: parseInt(data[7][1]),
      constitution: parseInt(data[7][2]),
      intelligence: parseInt(data[7][3]),
      wisdom: parseInt(data[7][4]),
      charisma: parseInt(data[7][5]),
    },
    alignment: parseSnakeCaseToUpperCaseLabel(data[5][0]),
    background: parseSnakeCaseToUpperCaseLabel(data[4][0]),
    classes,
    commandName: data[0][0],
    experiencePoints: parseInt(data[6][0]),
    name: data[1].join(" "),
    proficiencyBonus: parseInt(data[10]),
    race: parseSnakeCaseToUpperCaseLabel(data[2][0]),
    savingThrows: data[8],
    skills: data[9],
  }

  return character
}

export default parseCharacterFromRawData