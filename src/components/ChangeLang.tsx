import { Select } from 'antd'
import { Icons } from './Icon'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const { Option } = Select

const ChangeLang = () => {
  const { i18n, ready } = useTranslation()

  const onChangeLang = (value: string) => {
    i18n.changeLanguage(value)
  }

  useEffect(() => {
    console.log('Current language:', i18n.language)
  }, [i18n.language])

  if (!ready) {
    return null
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
      <Select size='large' style={{ width: 80 }} optionLabelProp='label' onChange={onChangeLang} value={i18n.language}>
        <Option value='vi' label={<Icons.vietnam_flag style={{ width: 20, height: 20, display: 'block' }} />}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icons.vietnam_flag style={{ width: 20, height: 20 }} />
          </div>
        </Option>
        <Option value='en' label={<Icons.england_flag style={{ width: 20, height: 20, display: 'block' }} />}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icons.england_flag style={{ width: 20, height: 20 }} />
          </div>
        </Option>
      </Select>
    </div>
  )
}

export default ChangeLang
