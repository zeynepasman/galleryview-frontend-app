
import { isNullOrUndefined } from 'util';

let headers = new Headers();
headers.set('Authorization', `Bearer 90172a500cbcbc1fddd746924c0ad901c26a2391`);

const actions = {
    INIT_GALLERY_DATA: 'INIT_GALLERY_DATA',
    GET_GALLERYS_REQUEST: "GET_GALLERYS_REQUEST",
    GET_GALLERYS_ERROR: 'GET_GALLERYS_ERROR',
    GET_GALLERY_REQUEST: "GET_GALLERY_REQUEST",
    GET_GALLERY_ERROR: 'GET_GALLERY_ERROR',

    initGalleryData: (section, sort, window, showViral) => {
        return async (dispatch) => {

            dispatch({
                type: actions.GET_GALLERYS_REQUEST,
            });
            return new Promise(async function (resolve, reject) {

                try {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}gallery/${section}/${sort}/${window}?showViral=${showViral}`, {
                        method: "GET",
                        headers: headers,
                    })
                    let galeryData = await response.json();
                    if (!response.ok) {
                        reject(galeryData.data.error)

                    } else {
                        let arr = galeryData.data.filter(obj => !isNullOrUndefined(obj.images)).map(obj => obj.images);
                        let images = [].concat(...arr);
                        console.log(images)
                        resolve(images)

                    }
                } catch (error) {
                    throw error;
                }
            });

        };
    },




}
export default actions;
