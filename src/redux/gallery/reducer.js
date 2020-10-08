import actions from './actions';

const initState = { initialGalleries: false };

export default function galleryReducer(state = initState, action) {
    switch (action.type) {
        case actions.INIT_GALERY_DATA: {
            return {
                ...state,
                initialGalleries: true
            };
        }
        default:
            return state;
    }
}
