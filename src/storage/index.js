import AsyncStorage from '@react-native-async-storage/async-storage'

let data_object = {
  data: '2018-08-01',
  local: 'Rua ...',
  umidade: 40
}

// Armazenando dados
const storeData = async (a) => {
  try {
    const jsonValue = JSON.stringify(data_object)
    console.log(jsonValue)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}
// Recuperando dados

export const getData = async () => {
  try {
    storeData()
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue
  } catch (e) {
    // error reading value
  }
}
