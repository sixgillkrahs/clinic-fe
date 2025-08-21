import { Select } from 'antd'
import { Icons } from './Icon'
import { useTranslation } from 'react-i18next'

const { Option } = Select

const ChangeLang = () => {
  const { i18n } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Select size='large' style={{ width: 80 }} optionLabelProp='label' onChange={onChangeLang}>
        <Option value='vi' label={<Icons.vietnam_flag style={{ width: 20, height: 20, display: 'block' }} />}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icons.vietnam_flag style={{ width: 20, height: 20 }} />
            <span>Tiếng Việt</span>
          </div>
        </Option>
        <Option value='en' label={<Icons.england_flag style={{ width: 20, height: 20, display: 'block' }} />}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icons.england_flag style={{ width: 20, height: 20 }} />
            <span>English</span>
          </div>
        </Option>
      </Select>
    </div>
  )
}

export default ChangeLang
