import * as httpRequest from '~/util/httpRequest';

export const get = async ({ category, _page, _limit }) => {
    try {
        const res = await httpRequest.get('iPhone', {
            params: {
                category: category,
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getAll = async ({ _page, _limit }) => {
    try {
        const res = await httpRequest.get('iPhone', {
            params: {
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getItem = async ({ id }) => {
    try {
        const res = await httpRequest.get('iPhone', {
            params: {
                id: id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
