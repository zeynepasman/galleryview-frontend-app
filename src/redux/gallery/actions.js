
import { isNullOrUndefined } from 'util';

const actions = {
    INIT_GALLERY_DATA: 'INIT_GALLERY_DATA',
    initGalleryData: (section, sort, window, showViral) => {
        let headers = new Headers();
        headers.set('Authorization', `${process.env.REACT_APP_AUTH_HEADER}`);
        return async (dispatch) => {
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
