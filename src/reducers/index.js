import {INCREMENT, DECREMENT, CHANGE_COLOR, CREATE, REMOVE} from "../actions/actionTypes";
import {getRandomColor} from "../utils/index";
import update from 'react-addons-update';


let initialState = {
    counters: [
        {
            number: 0,
            color: 'black'
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return Object.assign({}, state, {
                counters: update(
                    state.counters, {
                        $push: [{
                            number: 0,
                            color: 'black'
                        }]
                    }
                )
            });
        case REMOVE:
            return Object.assign({}, state, {
                counters: update(
                    state.counters, {
                        $splice: [[state.counters.length - 1, 1]]
                    }
                )
            });
        case INCREMENT:
            return Object.assign({}, state, {
                counters: update(
                    state.counters, {
                        [action.index]: {
                            number: {$set: state.counters[action.index].number + 1}
                        }
                    }
                )
            });
        case DECREMENT:
            return Object.assign({}, state, {
                counters: update(
                    state.counters, {
                        [action.index]: {
                            number: {$set: state.counters[action.index].number - 1}
                        }
                    }
                )
            });
        case CHANGE_COLOR:
            return Object.assign({}, state, {
                counters: update(
                    state.counters, {
                        [action.index]: {
                            color: {$set: getRandomColor()}
                        }
                    }
                )
            });
        default:
            return state;
    }
};
