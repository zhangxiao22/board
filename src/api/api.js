import {$httpGet, $httpPost} from '@/api/http'


export const queryOverview = params => {
    return $httpGet('/Equipment/QueryOverview', params);
};

//事件列表
export const eventList = params => {
  return $httpGet('/Request/QueryOverview', params);
};

// kpi指标
export const kpiList = params => {
  return $httpGet('/KPI/QueryOverview', params);
};

