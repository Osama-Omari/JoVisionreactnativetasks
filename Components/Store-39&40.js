import { createStore, combineReducers } from "redux";

const intialstate = {
    text: '',
};

const textReducer = (state = intialstate , action)=>{
    switch(action.type){
        case 'SET_TEXT':
            return{...state, text: action.payload};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    textState: textReducer,
});

const store = createStore(rootReducer);

export default store;