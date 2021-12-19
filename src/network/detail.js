import {request2} from "./request";

export function getDetail(iid) {
  return request2({
    url:'/detail',
    params:{
      iid
    }
  })
}
