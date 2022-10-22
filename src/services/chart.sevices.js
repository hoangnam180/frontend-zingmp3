import * as httpRequest from '~/utils/httpRequest';

export const chartHome = async () => {
    try {
        const res = await httpRequest.get('/charthome');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const newReleaseChart = async () => {
    try {
        const res = await httpRequest.get('/newreleasechart');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
