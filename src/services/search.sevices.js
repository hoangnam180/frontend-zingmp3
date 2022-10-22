import * as httpRequest from '~/utils/httpRequest';

export const search = async (keyword) => {
    try {
        const res = await httpRequest.get('/search', {
            params: {
               keyword 
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchSuggestion = async (keyword) => {
    try {
        const res = await httpRequest.get('/searchsuggestion',{ 
            params : {
                keyword
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchRecommend = async () => {
    try {
        const res = await httpRequest.get('/searchrecommend');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};