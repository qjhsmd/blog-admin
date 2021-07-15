import request from '@/utils/request'

export function userList(query) {
  return request({
    url: '/api/user/findAll',
    method: 'get',
    params: query
  })
}

export function userRemove(query) {
  return request({
    url: '/api/user/remove',
    method: 'get',
    params: query
  })
}
export function saveUser(data) {
  return request({
    url: '/api/user/saveUser',
    method: 'post',
    data
  })
}

