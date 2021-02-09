import React, { useContext } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import * as yup from 'yup'
import { userRegisterContext } from '../contexts/registers'

import { getData } from '../storage/index'

const schema = yup.object().shape({
  name: yup.string().required('required boy'),
  age: yup.number().required({ message: 'required boy' }),
  cpf: yup.number().required({ message: 'required boy' })
})

export default function formScreen() {
  const { users, addUser } = userRegisterContext()
  const navigation = useNavigation()
  const a = getData()

  const { control, handleSubmit, errors } = useForm({
    validationSchema: schema
  })

  const viewData = (data) => {
    schema.isValid(data).then((valid) => {
      navigation.navigate('List')
    })
  }
  const onSave = (data) => {
    schema.isValid(data).then((valid) => {
      if (valid) {
        addUser(data)
      }
    })
  }

  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Insira um nome"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && <Text> Nome não pode ficar em branco</Text>}

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Insira a idade"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="age"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.age && <Text>Idade não pode ficar em branco</Text>}

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Insira o CPF"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="cpf"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.cpf && <Text>CPF não pode ficar em branco</Text>}

      <Button title="Salvar" onPress={handleSubmit(onSave)} />
      <Button title="Cadastros" onPress={viewData} />
    </View>
  )
}
