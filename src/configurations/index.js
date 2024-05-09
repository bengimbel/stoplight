export const configurations = {
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
};
