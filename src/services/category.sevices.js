import * as httpRequest from '~/utils/httpRequest';

export const Category = async () => {
    try {
        const res = await httpRequest.get('/hub');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const CategoryDetail = async (id) => {
    try {
        const res = await httpRequest.get('/detailhub', {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
