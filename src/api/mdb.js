import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/mdb/list',
    method: 'get',
    params
  })
}

 