import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = ({ title, age, cpf }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Nome: {title}</Text>
    <Text style={styles.description}>Idade: {age}</Text>
    <Text style={styles.description}>CPF: {cpf}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'gray',
    width: '96%',
    height: 100,
    marginBottom: 10,
    marginHorizontal: '2%'
  },
  title: {
    fontSize: 30
  },
  description: {
    fontSize: 22,
    color: '#1a1a1a'
  }
})

export default Item
