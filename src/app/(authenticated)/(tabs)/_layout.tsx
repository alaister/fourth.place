import {
  Ticket as TicketSolidIcon,
  UserCircle as UserCircleSolidIcon,
  UserGroup as UserGroupSolidIcon,
} from '@nandorojo/heroicons/20/solid'
import {
  Ticket as TicketOutlineIcon,
  UserCircle as UserCircleOutlineIcon,
  UserGroup as UserGroupOutlineIcon,
} from '@nandorojo/heroicons/24/outline'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'

import Colors from '~/constants/Colors'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      initialRouteName="(events)"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="(events)"
        options={{
          title: 'Events',
          headerShown: false,
          tabBarIcon({ color, size, focused }) {
            const Icon = focused ? TicketSolidIcon : TicketOutlineIcon
            return <Icon width={size} height={size} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          headerShown: false,
          tabBarIcon({ color, size, focused }) {
            const Icon = focused ? UserGroupSolidIcon : UserGroupOutlineIcon
            return <Icon width={size} height={size} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon({ color, size, focused }) {
            const Icon = focused ? UserCircleSolidIcon : UserCircleOutlineIcon
            return <Icon width={size} height={size} color={color} />
          },
        }}
      />
    </Tabs>
  )
}
