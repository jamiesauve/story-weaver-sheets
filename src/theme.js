const sharedGlobals = {
  fontFamily: `'Crimson Text', serif`,
  fontSize: `1.2rem`,
};

const theme = {
  dark: {
    global: {
      ...sharedGlobals,
      background: `#111118`,
      borderColor: `#777`,
      color: `#ddd`,
      highlight: `#222228`,
    },
    box: {
      background: `#222233`,
    },
    header: {
      fontSize: `3rem`,
    },
    rollButton: {
      imageUrl: `url("./assets/d10-dark-mode.svg")`,
      imageUrlOnHover: `url("./assets/d10-on-hover.svg")`,
    },
  },
  light: {
    global: {
      ...sharedGlobals,
      background: `#fffff8`,
      borderColor: `#888`,
      color: `#111`,
      highlight: `#eeeee8`,
    },
    box: {
      background: `#eeeedd`,
    },
    header: {
      fontSize: `3rem`,
    },
    rollButton: {
      imageUrl: `url("./assets/d10-light-mode.svg")`,
      imageUrlOnHover: `url("./assets/d10-on-hover.svg")`,
    },
  }
};

export default theme;