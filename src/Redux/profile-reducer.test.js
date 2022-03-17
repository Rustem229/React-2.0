import ProfileReducer, { addPostActionCreator } from "./profile-reducer";

test("new post should be added", () => {
  let action = addPostActionCreator("it-CUMasutra");

  let state = {
    postData: [
      {
        id: 0,
        message: "Hello it's me mario",
        avatar: "/assets/img/marioAvatar.jpg",
        likesCount: 1,
      },
      {
        id: 1,
        message: "If you acknowledge any gods... start praying, now!",
        avatar: "/assets/img/skeletonAvatar.jpg",
        likesCount: 134,
      },
    ],

    newPostText: "",

    profile: null,

    myProfileDatas: {
      avatar: "/assets/img/MyAvatar.jpg",
      name: "Rustem",
      instId: "_van_der_eretein_",
      vkId: "mansnothot777",
      pn: "8-800-555-35-35",
    },
  };

  let newState = ProfileReducer(state, action);

  // expect(newState.postData.length).toBe(3);
  expect(newState.postData[2].message).toBe("it-CUMasutra");
});
