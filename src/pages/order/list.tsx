import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './list.scss'

export default function OrderList() {
  useLoad(() => {
    console.log('Order list page loaded.')
  })

  // 模拟订单数据
  const [orders] = useState([
    {
      id: 1,
      skillName: '室内设计服务',
      status: 'pending',
      price: 200,
      createTime: '2024-01-20',
      provider: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=designer_xiaowang',
        nickname: '设计师小王'
      },
      consumer: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan',
        nickname: '张三'
      }
    },
    {
      id: 2,
      skillName: '英语翻译',
      status: 'completed',
      price: 100,
      createTime: '2024-01-18',
      provider: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=english_teacher',
        nickname: '英语老师'
      },
      consumer: {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisi',
        nickname: '李四'
      }
    }
  ])

  // 订单状态映射
  const statusMap = {
    pending: '待确认',
    processing: '进行中',
    completed: '已完成',
    cancelled: '已取消'
  }

  return (
    <View className='order-list'>
      {orders.map(order => (
        <View key={order.id} className='order-card'>
          <View className='order-header'>
            <Text className='order-id'>订单号：{order.id}</Text>
            <Text className='order-status'>{statusMap[order.status]}</Text>
          </View>
          
          <View className='skill-info'>
            <Text className='skill-name'>{order.skillName}</Text>
            <Text className='price'>{order.price} 积分</Text>
          </View>

          <View className='user-info'>
            <View className='provider'>
              <Image className='avatar' src={order.provider.avatar} />
              <View className='user-meta'>
                <Text className='role'>服务者</Text>
                <Text className='nickname'>{order.provider.nickname}</Text>
              </View>
            </View>
            <View className='consumer'>
              <Image className='avatar' src={order.consumer.avatar} />
              <View className='user-meta'>
                <Text className='role'>需求者</Text>
                <Text className='nickname'>{order.consumer.nickname}</Text>
              </View>
            </View>
          </View>

          <View className='order-footer'>
            <Text className='create-time'>创建时间：{order.createTime}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}