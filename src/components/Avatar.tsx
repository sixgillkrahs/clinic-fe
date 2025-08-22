import { UserOutlined } from '@ant-design/icons'
import { Avatar as AvatarAnt, Dropdown } from 'antd'
import { MenuProps } from 'antd/lib'
// import { useTranslation } from 'react-i18next'

const items: MenuProps['items'] = [
  {
    label: (
      <a href='https://www.antgroup.com' target='_blank' rel='noopener noreferrer'>
        1st menu item
      </a>
    ),
    key: '0'
  },
  {
    label: (
      <a href='https://www.aliyun.com' target='_blank' rel='noopener noreferrer'>
        2nd menu item
      </a>
    ),
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '',
    key: '3'
  }
]

const Avatar = () => {
  // const { t } = useTranslation()
  return (
    <div>
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <AvatarAnt size='default' icon={<UserOutlined />} />
        </a>
      </Dropdown>
    </div>
  )
}

export default Avatar
