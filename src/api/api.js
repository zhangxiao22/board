import {$httpGet, $httpPost} from '@/api/http'


export const queryOverview = params => {
  return $httpGet('/Equipment/QueryOverview', params);
};

//科室收入支出
export const departmentIncome = params => {
  return $httpGet('/Equipment/IncomeExpenseByDepartment', params);
}

export const requestToday = params => {
  return $httpGet('/Request/Todays', params);
}

//事件列表
export const eventList = params => {
  return $httpGet('/Request/QueryOverview', params);
};

// kpi指标
export const kpiList = params => {
  return $httpGet('/Request/Kpi', params);
};

// 科室的设备
export const equipments = params => {
  return $httpGet('/Equipment/EquipmentsDetailsByDepartment', params);
};

// 获取雷达
export const radarData = params => {
  return $httpGet('/Equipment/GetRequestCountByID', params);
};

// 获取timeline
export const timeline = params => {
  return $httpGet('/Equipment/GetTimeline4APP', params);
};
