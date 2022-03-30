const SELECT_SONGS = "SELECT_SONGS";
const OFF_COVER = "OFF_COVER";

let initialState = {
  musicData: [
    {
      id: 0,
      src: "/assets/audio/One Punch Man - The Hero!.mp3",
      name: "One punch man - The Hero!",
      avatar: "/assets/img/MusicAvatars/OnePunchMan.png",
    },
    {
      id: 1,
      src: "/assets/audio/Kesha - Blow.mp3",
      name: "Kesha - Blow",
      avatar: "/assets/img/MusicAvatars/Kesha.jpg",
    },
    {
      id: 2,
      src: "/assets/audio/Кровосток - Куртец.mp3",
      name: "Кровосток - Куртец",
      avatar: "/assets/img/MusicAvatars/Кровосток - Цветы в вазе.png",
    },
    {
      id: 3,
      src: "/assets/audio/GONE.Fludd – ПАЦАНЫ II.mp3",
      name: "GONE.Fludd – ПАЦАНЫ II",
      avatar: "/assets/img/MusicAvatars/GONE.Fludd - ПАЦАНЫ II.png",
    },
    {
      id: 4,
      src: "/assets/audio/Oxxxymiron – Город под подошвой.mp3",
      name: "Oxxxymiron – Город под подошвой",
      avatar: "/assets/img/MusicAvatars/Oxxxymiron - Город под подошвой.png",
    },

    {
      id: 5,
      src: "/assets/audio/Кровосток - Душ.mp3",
      name: "Кровосток - Душ",
      avatar: "/assets/img/MusicAvatars/Кровосток - Душ.png",
    },
    {
      id: 6,
      src: "/assets/audio/Кровосток - Пожар.mp3",
      name: "Кровосток - Пожар",
      avatar: "/assets/img/MusicAvatars/Кровосток - Пожар.png",
    },
    {
      id: 7,
      src: "/assets/audio/polish_cow.mp3",
      name: "Dancing Polish Cow",
      avatar: "/assets/img/MusicAvatars/cow-dancing.gif",
    },
    {
      id: 8,
      src: "/assets/audio/Michael Jackson - Smooth Criminal.mp3",
      name: "Michael Jackson - Smooth Criminal",
      avatar: "/assets/img/MusicAvatars/Michael Jackson.png",
    },
    {
      id: 9,
      src: "/assets/audio/Кровосток - Цветы в вазе.mp3",
      name: "Кровосток - Цветы в вазе",
      avatar: "/assets/img/MusicAvatars/Кровосток - Цветы в вазе.png",
    },
    {
      id: 10,
      src: "/assets/audio/stayin_alive.mp3",
      name: "Bee Gees - Stayin Alive",
      avatar: "/assets/img/MusicAvatars/stayn_alive.png",
    },
  ],
  cover: {
    name: "CHOOSE THE TRACK",
    avatar: "/assets/img/MusicAvatars/DefaultAvatar.png",
    audioSrc: "",
    id: null,
  },
};

const MusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONGS: {
      return {
        ...state,
        cover: {
          name: action.name,
          avatar: action.avatar,
          audioSrc: action.src,
          id: action.id,
        },
      };
    }

    case OFF_COVER: {
      return {
        ...state,
        cover: {
          name: "CHOOSE THE TRACK",
          avatar: "/assets/img/MusicAvatars/DefaultAvatar.png",
          audioSrc: "",
          id: "",
        },
      };
    }
    default:
      return state;
  }
};

export default MusicReducer;

export const selectSongs = (name, avatar, src, id) => ({
  type: SELECT_SONGS,
  name,
  avatar,
  src,
  id,
});

export const offCover = () => ({
  type: OFF_COVER,
});
