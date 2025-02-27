import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

export default function ReviewList() {
  useLoad(() => {
    console.log('Review list page loaded.')
  })

  // 模拟评价数据
  const [reviews] = useState([
    {
      id: 1,
      skillName: '室内设计服务',
      rating: 5,
      content: '设计师很专业，方案很满意',
      createTime: '2024-01-15',
      reviewer: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer1',
        nickname: '张三'
      }
    },
    {
      id: 2,
      skillName: '英语翻译',
      rating: 4,
      content: '翻译质量很好，沟通顺畅',
      createTime: '2024-01-10',
      reviewer: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer2',
        nickname: '李四'
      }
    }
  ])

  return (
    <View className='review-list'>
      {reviews.map(review => (
        <View key={review.id} className='review-card'>
          <View className='review-header'>
            <View className='reviewer-info'>
              <Image className='avatar' src={review.reviewer.avatar} />
              <Text className='nickname'>{review.reviewer.nickname}</Text>
            </View>
            <Text className='rating'>{review.rating}分</Text>
          </View>
          <View className='skill-name'>{review.skillName}</View>
          <Text className='content'>{review.content}</Text>
          <Text className='time'>{review.createTime}</Text>
        </View>
      ))}
    </View>
  )
}