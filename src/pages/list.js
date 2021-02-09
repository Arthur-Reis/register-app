import React from 'react'
import { SafeAreaView, FlatList, Text, View } from 'react-native'
import { userRegisterContext } from '../contexts/registers'
import Item from '../components/user'

export default function list() {
  const { users } = userRegisterContext()
  const stringfyUser = JSON.stringify(users[0])
  
  const renderItem = ({ item }) => <Item title={item.name} age={item.age} cpf={item.cpf} />

  return (
    <SafeAreaView>
      <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => item.cpf} />
    </SafeAreaView>
  )
}
