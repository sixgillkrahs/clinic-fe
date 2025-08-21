// import { lazy } from 'react'
// import MainLayout from '@/layouts/MainLayout'
// import AuthLayout from '@/layouts/AuthLayout'
// import BlankLayout from '@/layouts/BlankLayout'
// import { UserOutlined } from '@ant-design/icons'

import { lazy } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Route } from '../types/route'

export const PUBLIC_ROUTER: Route[] = [
  {
    component: lazy(() => import('../pages/Test')),
    key: 'kham-suc-khoe',
    path: '',
    layout: MainLayout,
    label: 'Khám sức khỏe'
    // hiddenMenu: true
  }
  // {
  //   component: lazy(() => import('@/pages/Auth/Register')),
  //   key: 'register',
  //   path: 'register',
  //   layout: AuthLayout,
  //   label: 'Register',
  //   hiddenMenu: true
  // },
  // {
  //   component: lazy(() => import('@/pages/404')),
  //   key: '404',
  //   path: '/404',
  //   layout: BlankLayout,
  //   hiddenMenu: true
  // }
]

export const PRIVATE_ROUTER: Route[] = [
  // {
  //   component: lazy(() => import('@/pages/Home')),
  //   key: 'private-01',
  //   path: 'home',
  //   // children: [
  //   //   {
  //   //     component: lazy(() => import('@/pages/Home/Dashboard')),
  //   //     key: '1234dfas',
  //   //     path: 'dashboard',
  //   //     label: 'Dashboard',
  //   //   },
  //   // ],
  //   layout: MainLayout,
  //   label: 'Home',
  //   icon: <UserOutlined />,
  //   permission: 'user:listUser'
  // },
  // {
  //   component: lazy(() => import('@/pages/Test')),
  //   key: 'test',
  //   path: 'test',
  //   layout: MainLayout,
  //   label: 'Test',
  //   permission: 'user:editUser'
  // }
]
