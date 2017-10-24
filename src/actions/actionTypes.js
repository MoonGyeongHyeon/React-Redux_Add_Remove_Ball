export const CREATE = "CREATE";
export const REMOVE = "REMOVE";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CHANGE_COLOR = "CHANGE_COLOR";

export const create = (color) => {
    return {
        type: CREATE,
        color
    }
};

export const remove = (color) => {
    return {
        type: REMOVE,
        color
    }
};


export const increment = (index) => {
    return {
        type: INCREMENT,
        index
    }
};

export const decrement = (index) => {
    return {
        type: DECREMENT,
        index
    }
};

export const changeColor = (index) => {
    return {
        type: CHANGE_COLOR,
        index
    }
};


