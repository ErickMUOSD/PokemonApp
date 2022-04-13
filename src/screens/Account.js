import React from "react";
import {Text, View} from "react-native";
import {userDetails} from "./userDb";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";
import useAuth from "../hooks/useAuth";
export  default function Account() {
    const {auth} = useAuth() ;

    return(
        <View>
            {auth ? <UserData/>: <LoginForm/>}
        </View>
    )
}


