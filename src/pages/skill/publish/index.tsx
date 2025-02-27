import { View, Text, Input, Textarea, Button } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default function Publish() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  })

  // 模拟技能分类数据
  const categories = [
    '艺术创作',
    '语言服务',
    '技术开发',
    '生活服务',
    '教育培训',
    '专业咨询'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    // 表单验证
    if (!formData.name.trim()) {
      // TODO: 显示错误提示
      return
    }
    if (!formData.category) {
      // TODO: 显示错误提示
      return
    }
    if (!formData.price || isNaN(Number(formData.price))) {
      // TODO: 显示错误提示
      return
    }
    if (!formData.description.trim()) {
      // TODO: 显示错误提示
      return
    }

    // TODO: 提交表单数据
    console.log('提交的表单数据:', formData)
  }

  return (
    <View className='publish'>
      <View className='form-container'>
        {/* 技能名称 */}
        <View className='form-item'>
          <Text className='label'>技能名称</Text>
          <Input
            className='input'
            placeholder='请输入技能名称'
            value={formData.name}
            onInput={e => handleInputChange('name', e.detail.value)}
          />
        </View>

        {/* 技能分类 */}
        <View className='form-item'>
          <Text className='label'>选择分类</Text>
          <View className='category-list'>
            {categories.map(category => (
              <Text
                key={category}
                className={`category-item ${formData.category === category ? 'active' : ''}`}
                onClick={() => handleInputChange('category', category)}
              >
                {category}
              </Text>
            ))}
          </View>
        </View>

        {/* 积分定价 */}
        <View className='form-item'>
          <Text className='label'>积分定价</Text>
          <Input
            className='input'
            type='number'
            placeholder='请输入每次服务所需积分'
            value={formData.price}
            onInput={e => handleInputChange('price', e.detail.value)}
          />
        </View>

        {/* 详细描述 */}
        <View className='form-item'>
          <Text className='label'>详细描述</Text>
          <Textarea
            className='textarea'
            placeholder='请详细描述你的技能服务内容'
            value={formData.description}
            onInput={e => handleInputChange('description', e.detail.value)}
          />
        </View>

        {/* 提交按钮 */}
        <Button className='submit-btn' onClick={handleSubmit}>
          发布技能
        </Button>
      </View>
    </View>
  )
}