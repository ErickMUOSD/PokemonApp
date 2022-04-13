import React, {useState} from "react";
import {View, StyleSheet,} from "react-native";
import {Button, Text, Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import {useFormik} from "formik";
import * as Yup from "yup"
import {user, userDetails} from "../../screens/userDb";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {

    const [errro, setError] = useState("")
    const {login} = useAuth()


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formInfo) => {
            const {username, password} = formInfo
            if (username !== user.username || password !== user.password) {
                setError('Credentials doesnt match')

            } else {
                login(userDetails)
            }
        }
    })

    return (
        <View>
            <Text style={styles.title}>
                Iniciar sesión
            </Text>
            <Text style={styles.error}>{errro}  </Text>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Input
                leftIcon={<Icon name='person' style={styles.icon}/>}
                placeholder='User name'
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}

            />
            <Input
                leftIcon={<Icon name='key' style={styles.icon}/>}
                placeholder='Password'
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <View style={styles.btn}>
                <Button title='Sing up' onPress={formik.handleSubmit}/>
            </View>
        </View>
    )
}

function initialValues() {
    return {
        username: '',
        password: ''
    }
}

function validationSchema() {
    return {
        username: Yup.string().required('Usuario obligatorio'),
        password: Yup.string().required('Contraseña obligatoria')
    }
}

const styles = StyleSheet.create({
        title: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 20,

        },
        input: {
            height: 60,
            margin: 5,
            color: 'black',
            fontSize: 18,
            borderWidth: 0.8,
            borderColor: 'grey',

        },
        error: {
            color: 'red',
            marginLeft:10

        },

        icon: {
            fontSize: 20,


        },
        btn: {
            marginHorizontal: 10
        }
    }
)