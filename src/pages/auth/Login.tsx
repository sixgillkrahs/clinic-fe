import { Button, Card, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const rules = {
    username: [{ required: true, message: t('login.required.username') }],
    password: [{ required: true, message: t('login.required.password') }]
  }

  const onFinish = (values: Record<string, string>) => {
    console.log('Received values:', values)
    // Handle login logic here
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ece9e6, #ffffff)'
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <Form layout='vertical' onFinish={onFinish}>
          <h2 style={{ textAlign: 'center', marginBottom: 24 }} className='text-2xl'>
            {t('login.title')}
          </h2>

          <Form.Item label={t('login.username')} name='username' rules={rules.username}>
            <Input placeholder={t('login.placeholder.username')} />
          </Form.Item>

          <Form.Item label={t('login.password')} name='password' rules={rules.password}>
            <Input.Password placeholder={t('login.placeholder.password')} />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              {t('login.button.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
