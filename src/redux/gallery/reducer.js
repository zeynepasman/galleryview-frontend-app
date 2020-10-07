import actions from './actions';

const initState = { loading: false, initialGaleries: false };

export default function galleryReducer(state = initState, action) {
    switch (action.type) {
        case actions.INIT_GALERY_DATA: {
            return {
                ...state,
                loading: false,
                initialGaleries: true,
            };
        }
        default:
            return state;
    }
}
