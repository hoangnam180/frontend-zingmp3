import * as httpRequest from '~/utils/httpRequest';

export const radio = async () => {
    try {
        const res = await httpRequest.get('/radio');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
