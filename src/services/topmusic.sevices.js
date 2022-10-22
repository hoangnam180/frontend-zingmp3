import * as httpRequest from '~/utils/httpRequest';

export const TopMusic = async () => {
    try {
        const res = await httpRequest.get('/top100');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
