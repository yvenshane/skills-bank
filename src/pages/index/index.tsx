import { View, Text, Input, ScrollView, Image } from '@tarojs/components'
import { useState } from 'react'
import { useLoad, navigateTo } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Skill square page loaded.')
  })

  const [searchKeyword, setSearchKeyword] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

  // 模拟技能分类数据
  const categories = [
    '全部',
    '艺术创作',
    '语言服务',
    '技术开发',
    '生活服务',
    '教育培训',
    '专业咨询'
  ]

  // 模拟技能列表数据
  const skills = [
    {
      id: 1,
      name: '室内设计服务',
      category: '艺术创作',
      price: 200,
      provider: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=provider1',
        nickname: '设计师小王'
      },
      description: '专业室内设计，擅长现代简约风格'
    },
    {
      id: 2,
      name: '德语翻译',
      category: '语言服务',
      price: 100,
      provider: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=provider2',
        nickname: '德语达人'
      },
      description: '德语母语者，专业翻译服务'
    },
    {
      id: 3,
      name: '智能家居安装',
      category: '技术开发',
      price: 300,
      provider: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=provider3',
        nickname: '科技达人'
      },
      description: '智能家居设备安装与调试服务'
    }
  ]

  return (
    <View className='index'>
      {/* 搜索栏 */}
      <View className='search-bar'>
        <Input
          className='search-input'
          placeholder='搜索技能'
          value={searchKeyword}
          onInput={e => setSearchKeyword(e.detail.value)}
        />
      </View>

      {/* 分类列表 */}
      <ScrollView className='category-list' scrollX>
        {categories.map(category => (
          <Text
            key={category}
            className={`category-item ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Text>
        ))}
      </ScrollView>

      {/* 技能列表 */}
      <View className='skill-list'>
        {skills.map(skill => (
          <View key={skill.id} className='skill-card' onClick={() => navigateTo({ url: `/pages/skill/detail/index?id=${skill.id}` })}>
            <View className='skill-header'>
              <View className='provider-info'>
                <Image className='avatar' src={skill.provider.avatar} />
                <Text className='nickname'>{skill.provider.nickname}</Text>
              </View>
              <Text className='price'>{skill.price} 积分/次</Text>
            </View>
            <View className='skill-content'>
              <Text className='name'>{skill.name}</Text>
              <Text className='category'>{skill.category}</Text>
              <Text className='description'>{skill.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
