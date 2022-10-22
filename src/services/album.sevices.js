import * as httpRequest from '~/utils/httpRequest';

export const albums = async (id) => {
    try {
        const res = await httpRequest.get('/detailplaylist', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
