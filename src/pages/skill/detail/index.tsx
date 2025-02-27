import { View, Text, Image, Button } from '@tarojs/components'
import { useLoad, useRouter } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

export default function SkillDetail() {
  const router = useRouter()
  const { id } = router.params

  useLoad(() => {
    console.log('Skill detail page loaded, id:', id)
  })

  // 模拟技能详情数据
  const [skillDetail] = useState({
    id: Number(id),
    name: '室内设计服务',
    category: '艺术创作',
    price: 200,
    provider: {
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=designer_xiaowang',
      nickname: '设计师小王',
      rating: 4.8,
      orderCount: 56
    },
    description: '专业室内设计，擅长现代简约风格。提供从概念设计到施工图的全套服务，包括：\n- 空间布局规划\n- 色彩搭配方案\n- 材料选择建议\n- 家具配置建议\n- 施工图绘制',
    reviews: [
      {
        id: 1,
        user: {
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=designer_xiaowang',
          nickname: '张三'
        },
        rating: 5,
        content: '设计师很专业，方案很满意',
        createTime: '2024-01-15'
      },
      {
        id: 2,
        user: {
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=designer_xiaowang',
          nickname: '李四'
        },
        rating: 4,
        content: '沟通顺畅，效果不错',
        createTime: '2024-01-10'
      }
    ]
  })

  return (
    <View className='skill-detail'>
      {/* 技能信息 */}
      <View className='skill-info'>
        <View className='skill-header'>
          <Text className='name'>{skillDetail.name}</Text>
          <Text className='price'>{skillDetail.price} 积分/次</Text>
        </View>
        <Text className='category'>{skillDetail.category}</Text>
        <Text className='description'>{skillDetail.description}</Text>
      </View>

      {/* 提供者信息 */}
      <View className='provider-card'>
        <View className='provider-header'>
          <View className='provider-info'>
            <Image className='avatar' src={skillDetail.provider.avatar} />
            <View className='meta'>
              <Text className='nickname'>{skillDetail.provider.nickname}</Text>
              <View className='stats'>
                <Text className='rating'>评分 {skillDetail.provider.rating}</Text>
                <Text className='order-count'>接单 {skillDetail.provider.orderCount}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 评价列表 */}
      <View className='reviews-section'>
        <View className='section-title'>用户评价</View>
        <View className='reviews-list'>
          {skillDetail.reviews.map(review => (
            <View key={review.id} className='review-item'>
              <View className='review-header'>
                <View className='user-info'>
                  <Image className='avatar' src={review.user.avatar} />
                  <Text className='nickname'>{review.user.nickname}</Text>
                </View>
                <Text className='rating'>{review.rating}分</Text>
              </View>
              <Text className='content'>{review.content}</Text>
              <Text className='time'>{review.createTime}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 底部操作栏 */}
      <View className='action-bar'>
        <Button className='order-btn'>立即预约</Button>
      </View>
    </View>
  )
}