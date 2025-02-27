import { View, Text, Image } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import './index.scss'

export default function Profile() {
  useLoad(() => {
    console.log('Profile page loaded.')
  })

  // 模拟用户数据
  const userInfo = {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=profile_user',
    nickname: '用户昵称',
    points: 1000,
    skills: [
      { id: 1, name: '摄影', category: '艺术创作', price: 100 },
      { id: 2, name: '英语翻译', category: '语言服务', price: 80 }
    ]
  }

  return (
    <View className='profile'>
      {/* 用户信息卡片 */}
      <View className='profile-card'>
        <Image className='avatar' src={userInfo.avatar} />
        <Text className='nickname'>{userInfo.nickname}</Text>
        <View className='points-info'>
          <Text className='points-label'>我的积分</Text>
          <Text className='points-value'>{userInfo.points}</Text>
        </View>
      </View>

      {/* 我的技能列表 */}
      <View className='skills-section'>
        <View className='section-title'>我的技能</View>
        <View className='skills-list'>
          {userInfo.skills.map(skill => (
            <View key={skill.id} className='skill-item'>
              <View className='skill-name'>{skill.name}</View>
              <View className='skill-category'>{skill.category}</View>
              <View className='skill-price'>{skill.price} 积分/次</View>
            </View>
          ))}
        </View>
      </View>

      {/* 功能入口 */}
      <View className='feature-list'>
        <View className='feature-item' onClick={() => navigateTo({ url: '/pages/order/list' })}>我的订单</View>
        <View className='feature-item'>收到的评价</View>
        <View className='feature-item'>积分明细</View>
        <View className='feature-item'>设置</View>
      </View>
    </View>
  )
}