import {$httpGet, $httpPost} from '@/api/http'

// const SUB_BASE_URL = '/wechat';

export const queryOverview = params => {
    return $httpGet('/Equipment/QueryOverview', params);
};

