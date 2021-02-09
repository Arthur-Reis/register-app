import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import formScreen from './pages/form'
import list from './pages/list'
import RegistersProvider from './contexts/registers'

const Stack = createStackNavigator()

function App() {
  return (
    <RegistersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={formScreen} />
          <Stack.Screen name="List" options={{ headerShown: false }} component={list} />
        </Stack.Navigator>
      </NavigationContainer>
    </RegistersProvider>
  )
}

export default App
