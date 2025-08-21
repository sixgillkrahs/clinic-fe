// import { AuthContext } from '@/context/AuthContext'
import React, { Fragment } from 'react'

const PrivateRouter = ({
  children
}: {
  children: React.ReactNode
  requiredRole?: string
  requiredPermission?: string
}) => {
  // const { isAuthenticated, user, isLoading } = useContext(AuthContext)

  // if (isLoading) {
  //   return <Loading />
  // }

  // if (!isAuthenticated) {
  //   MessageService.error('Vui lòng đăng nhập để truy cập.')
  //   return <Navigate to='/login' replace />
  // }

  // if (requiredRole && user && user.role !== requiredRole) {
  //   MessageService.error('Bạn không có quyền truy cập.')
  //   return <Navigate to='/unauthorized' replace />
  // }

  // if (requiredPermission && user && (!user.permissions || !user.permissions.includes(requiredPermission))) {
  //   return <Navigate to='/404' replace />
  // }

  return <Fragment>{children}</Fragment>
}

export default PrivateRouter
