// import { lazy } from 'react'
// import MainLayout from '@/layouts/MainLayout'
// import AuthLayout from '@/layouts/AuthLayout'
// import BlankLayout from '@/layouts/BlankLayout'
// import { UserOutlined } from '@ant-design/icons'

import { lazy } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Route } from '../types/route'
import AuthLayout from '../layouts/AuthLayout'

export const PUBLIC_ROUTER: Route[] = [
  {
    component: lazy(() => import('../pages/Dashboard')),
    key: 'dashboard',
    path: 'dashboard',
    layout: MainLayout,
    hiddenMenu: false,
    label: {
      vi: 'Bảng điều khiển',
      en: 'Dashboard'
    }
  },
  {
    component: lazy(() => import('../pages/Test')),
    key: 'kham-suc-khoe',
    path: '',
    layout: MainLayout,
    label: {
      vi: 'Khám sức khỏe',
      en: 'Health Checkup'
    }
    // hiddenMenu: true
  },
  {
    component: lazy(() => import('../pages/auth/Login')),
    key: 'login',
    path: '/auth/login',
    layout: AuthLayout,
    hiddenMenu: true
  },
  {
    component: lazy(() => import('../pages/404')),
    key: '404',
    path: '/404',
    layout: MainLayout,
    hiddenMenu: true
  }
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
