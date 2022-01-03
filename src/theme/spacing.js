const DEFAULT_SIZE = 1;

export const SIZES = {
  layout: {
    main: {
      maxWidth: "720px",
    },
    side: {
      width: "450px",
    },
  },
  dec_0_25: DEFAULT_SIZE * 0.25 + "rem",
  dec_0_5: DEFAULT_SIZE * 0.5 + "rem",
  dec_0_75: DEFAULT_SIZE * 0.75 + "rem",
  default: DEFAULT_SIZE + "rem",
  inc_1_25: DEFAULT_SIZE * 1.25 + "rem",
  inc_1_5: DEFAULT_SIZE * 1.5 + "rem",
  inc_2: DEFAULT_SIZE * 2 + "rem",
  inc_3: DEFAULT_SIZE * 3 + "rem",
  inc_4: DEFAULT_SIZE * 4 + "rem",
  breakpoint: {
    mobile: "750px",
    tablet: "1133px",
  },
};
