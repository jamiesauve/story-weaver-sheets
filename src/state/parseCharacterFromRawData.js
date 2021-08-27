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
    commandName: data[0][0],
    name: data[1].join(" "),
    race: parseSnakeCaseToUpperCaseLabel(data[2][0]),
    classes,
    background: parseSnakeCaseToUpperCaseLabel(data[4][0]),
    alignment: parseSnakeCaseToUpperCaseLabel(data[5][0]),
    experiencePoints: parseInt(data[6][0]),
    height: data[7][0],
    weight: parseInt(data[8][0]),
    size: parseSnakeCaseToUpperCaseLabel(data[9][0]),
    abilityScores: {
      strength: parseInt(data[10][0]),
      dexterity: parseInt(data[10][1]),
      constitution: parseInt(data[10][2]),
      intelligence: parseInt(data[10][3]),
      wisdom: parseInt(data[10][4]),
      charisma: parseInt(data[10][5]),
    },
    proficiencyBonus: parseInt(data[13]),
    savingThrows: data[11],
    skills: data[12],
  }

  return character
}

export default parseCharacterFromRawData