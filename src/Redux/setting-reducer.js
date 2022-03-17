const CHANGE_PAGE_STYLE = "CHANGE_PAGE_STYLE"
const CHANGE_NAVBAR_STYLE = "CHANGE_NAVBAR_STYLE"

let initialState = {
   pageFlex: false, navbarFlex: true 
};

const SettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_STYLE: {
      return {
        ...state,
        pageFlex: true
      };
    }
    case CHANGE_NAVBAR_STYLE: {
        return {
          ...state, 
          navbarFlex: false
        }
      }
    default: return state
  }
};

export const changePageStyle = () => ({
 type: CHANGE_PAGE_STYLE
})

export const changeNavbarStyle = () => ({
  type: CHANGE_NAVBAR_STYLE
})

export default SettingReducer


