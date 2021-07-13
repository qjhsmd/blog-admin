import request from '@/utils/request'

export function userList(query) {
  return request({
    url: '/api/user/findAll',
    method: 'get',
    params: query
  })
}
