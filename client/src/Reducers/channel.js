const channelReducers = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_DATA_SUCCESS':
           
            return state.map(stateItem => stateItem._id === action.payload._id ? action.payload : stateItem);
        case 'FETCH_CHANNELS_SUCCESS':
            
            return action.payload;
        default:
            return state;
    }
};

export default channelReducers;
