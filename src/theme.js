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
      color: `#eee`,
    },
    box: {
      background: `#222228`,
    },
    header: {
      fontSize: `3rem`,
    },
  },
  light: {
    global: {
      ...sharedGlobals,
      background: `#fffff8`,
      borderColor: `#888`,
      color: `#111`,
    },
    box: {
      background: `#eeeee8`,
    },
    header: {
      fontSize: `3rem`,
    },
  }
};

export default theme;