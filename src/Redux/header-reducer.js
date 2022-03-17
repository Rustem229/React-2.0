const ON_MUSIC = "ON_MUSisIC";
const OFF_MUSIC = "OFF_MUSIC";

let initialState = {
  audioSrc: "",
  isRunning: false,
  isVisible: false,
  lastSongId: null,
  volume: 0.4,
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_MUSIC: {
      return {
        ...state,
        isRunning: true,
        isVisible: true,
        audioSrc: action.src,
        lastSongId: action.id,
      };
    }
    case OFF_MUSIC: {
      return { ...state, isRunning: false, isVisible: false, audioSrc: "" };
    }
    default:
      return state;
  }
};

export default HeaderReducer;

export const onMusic = (src, id) => ({ type: ON_MUSIC, src, id });

export const offMusic = () => ({ type: OFF_MUSIC });
