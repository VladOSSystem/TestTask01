import {
    LEFT_MENU_BAR_TOGGLE, 
    CHANGE_LAYOUT,
    DOWN_ARROW_TOGGLE
} from './actionTypes';

const initialState = {
    showSidebar: false,
    hideDownArrow: false, 
    layoutStyle: 'left'
};
const Layout = (state = initialState, action) => {
    switch(action.type) {
        case LEFT_MENU_BAR_TOGGLE:
            return {
                ...state,
                showSidebar: action.payload
            };
        case CHANGE_LAYOUT:
            return {
                ...state, 
                layoutStyle: action.payload
            };
        case DOWN_ARROW_TOGGLE:
            return {
                ...state,
                hideDownArrow: action.payload
            };
        default: 
            return state;
    }
};

export default Layout; 