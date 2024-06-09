import { MdPendingActions } from "react-icons/md";

const channelReducers = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return state.map(stateItem => stateItem._id === action.payload._id ? action.payload : stateItem);
        case "FETCH_CHANNELS":
            return action.payload;
        default:
            return state;
    }
};

export default channelReducers;
