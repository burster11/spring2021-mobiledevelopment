let state = {
    miles: 0,
    situps: 0
};

function reducer(state, action) {
    switch(action.type) {
        case `increment1`:
            return {miles: state.miles + 1, situps: state.situps};
        case `increment2`:
            return {miles: state.miles, situps: state.situps + 10};
        case `decrement1`:
            return {miles: state.miles - 1, situps: state.situps};
        case `decrement2`:
            return {miles: state.miles, situps: state.situps - 10};
        default:
            throw new Error();
    }
}

export {state, reducer};