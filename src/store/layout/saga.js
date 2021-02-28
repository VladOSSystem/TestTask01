import { all, call, fork, takeEvery, put } from 'redux-saga/effects';
import { 
    LEFT_MENU_BAR_TOGGLE, 
    CHANGE_LAYOUT,
    DOWN_ARROW_TOGGLE
} from './actionTypes';

import {
    showSidebar,
    changeLayout,
    dropDownArrow
} from './action';

// Toggle function for adding and removing classes

const classManager = (cssClass, action = 'toggle') => {
    switch (action) {
        case "add":
            if (document.body) document.body.classList.add(cssClass);
            break;
        case "remove":
            if (document.body) document.body.classList.remove(cssClass);
            break;
        default:
            if (document.body) document.body.classList.toggle(cssClass);
            break;
    }   
    return true; 
};

function* changeDropdownArrow ({payload: isOpen}) { 
    try {
        return dropDownArrow(isOpen)
    } catch(error) {
        throw error
    }
};
function* changeSideBar ({payload: isOpen}) { 
    try {
        return showSidebar(isOpen)
    } catch(error) {
        throw error
    }
};
function* changeLayoutStyle ({payload: position}) {
    try {
        yield put(changeLayout(position))
    } catch(error) {
        throw error
    }
}

// Watchers
export function* watchChangeDropdownArrow() {
    yield takeEvery(DOWN_ARROW_TOGGLE, changeDropdownArrow);
};
export function* watchChangeSideBar() {
    yield takeEvery(LEFT_MENU_BAR_TOGGLE, changeSideBar);
};
export function* watchChangeLayoutStyle() { 
    yield takeEvery(CHANGE_LAYOUT, changeLayoutStyle);
};
function* LayoutSaga() {
    yield all([
        fork(watchChangeDropdownArrow),
        fork(watchChangeSideBar),
        // fork(watchChangeLayoutStyle)
    ]);
};

export default LayoutSaga;