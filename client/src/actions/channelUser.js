import * as api from '../api';

export const fetchAllChannel = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllChannel();
        dispatch({ type: 'FETCH_CHANNELS_SUCCESS', payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_CHANNELS_FAILURE', payload: error.message });
    }
};

export const updateChannelData = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateChannelData(id, updateData);
        dispatch({ type: 'UPDATE_DATA_SUCCESS', payload: data });
     
        dispatch(fetchAllChannel());
    } catch (error) {
        console.log(error);
        dispatch({ type: 'UPDATE_DATA_FAILURE', payload: error.message });
    }
};
