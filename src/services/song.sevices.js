import * as httpRequest from '~/utils/httpRequest';

export const song = async (id) => {
    try {
        const res = await httpRequest.get('/song', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const infoSong = async (id) => {
    try {
        const res = await httpRequest.get('/infosong', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
