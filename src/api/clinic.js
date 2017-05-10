import { fetch } from 'utils/fetch';

export function fetchList(query) {
    return fetch({
        url: 'http://api.everjiankang.com/warehouse/brand/getBrandList/',
        method: 'get',
        params: query
    });
}

