import { ConfigProvider, message } from 'antd'
import viVN from 'antd/locale/vi_VN'
import { Suspense, useEffect } from 'react'
import './App.css'
import { MessageService } from './utils'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from './routes/router'
import PrivateRouter from './routes/PrivateRouter'
import { Loading } from './components'

function App() {
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    MessageService.init(messageApi)
  }, [messageApi])

  return (
    <ConfigProvider locale={viVN}>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTER.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <route.layout>
                    <Suspense fallback={<Loading />}>
                      <route.component />
                    </Suspense>
                  </route.layout>
                }
              />
            )
          })}

          {PRIVATE_ROUTER.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <route.layout>
                    <PrivateRouter requiredPermission={route.permission}>
                      <Suspense fallback={<Loading />}>
                        <route.component />
                      </Suspense>
                    </PrivateRouter>
                  </route.layout>
                }
              />
            )
          })}
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
