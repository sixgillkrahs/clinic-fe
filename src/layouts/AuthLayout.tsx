import { Layout } from 'antd'
import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <Layout style={{ minHeight: '100vh' }}>{children}</Layout>
}

export default AuthLayout
