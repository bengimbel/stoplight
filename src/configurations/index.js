const configurations = {
  standard: {
    lights: {
      red: {
        position: 1,
        color: "red",
      },
      yellow: {
        position: 2,
        color: "yellow",
      },
      green: {
        position: 3,
        color: "green",
      },
    },
    sequence: [
      {
        colors: ["green"],
        duration: 3000,
      },
      {
        colors: ["yellow"],
        duration: 1000,
      },
      {
        colors: ["red"],
        duration: 2000,
      },
    ],
  },
  emergency: {
    lights: {
      red: {
        position: 1,
        color: "red",
      },
      yellow: {
        position: 2,
        color: "yellow",
      },
      green: {
        position: 3,
        color: "green",
      },
    },
    sequence: [
      { colors: ["red"], duration: 1000 },
      { colors: "off", duration: 1000 },
    ],
  },
  protectedTurn: {
    lights: {
      red: { position: 1, color: "red" },
      yellow: { position: 2, color: "yellow" },
      green: { position: 3, color: "green" },
      specialGreen: { position: 4, color: "#20F7B2" },
    },
    sequence: [
      { colors: ["red"], duration: 1000 },
      { colors: ["yellow"], duration: 1000 },
      { colors: ["specialGreen"], duration: 5000 },
    ],
  },
  partyTime: {
    lights: {
      red: { position: 1, color: "red" },
      purple: { position: 2, color: "purple" },
      green: { position: 3, color: "green" },
      orange: { position: 4, color: "orange" },
    },
    sequence: [
      { colors: ["red", "orange"], duration: 500 },
      { colors: ["purple", "green"], duration: 500 },
      { colors: ["purple", "orange", "green"], duration: 500 },
      { colors: ["purple", "orange", "green", "red"], duration: 500 },
    ],
  },
};

export default configurations