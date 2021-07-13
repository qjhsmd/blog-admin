/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const sysRouter = {
  path: '/sys',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Sys',
  meta: {
    title: 'Sys',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/sys/user/list'),
      name: 'UserMage',
      meta: { title: '用户管理' }
    }
  ]
}
export default sysRouter
