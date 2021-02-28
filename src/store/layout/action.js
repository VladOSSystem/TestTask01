import {
    LEFT_MENU_BAR_TOGGLE, 
    CHANGE_LAYOUT,
    DOWN_ARROW_TOGGLE
} from './actionTypes';

export const showSidebar = isOpen => ({
    type: LEFT_MENU_BAR_TOGGLE,
    payload: isOpen
});

export const changeLayout = layout => ({
    type: CHANGE_LAYOUT,
    payload: layout
});

export const dropDownArrow = isOpen => ({
    type: DOWN_ARROW_TOGGLE,
    payload: isOpen
})