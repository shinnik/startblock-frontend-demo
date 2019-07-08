import * as response from './backendMockData';
import {parseResponse} from "../../utils/parseResponse";

const tmpData = parseResponse(response);

export const data = tmpData.data;
export const multidata = tmpData.multidata;
export const multidata2 = tmpData.multidata2;
export const profile = tmpData.profile;

