const channelReducers = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_DATA_SUCCESS':
            // Assuming the payload contains the updated channel data
            return state.map(stateItem => stateItem._id === action.payload._id ? action.payload : stateItem);
        case 'FETCH_CHANNELS_SUCCESS':
            // Assuming the payload contains the fetched channel data
            return action.payload;
        default:
            return state;
    }
};

export default channelReducers;
