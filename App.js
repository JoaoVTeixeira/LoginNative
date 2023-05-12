import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';






export default function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const [usuario, setUsuario] = useState({});
  console.log(email, senha);
  const handleSubmit = async () => {
    try {
      setUsuario({...usuario, ["email"]: email, ["senha"]:senha});
      console.log(usuario)
      const response = await axios.post('http://10.0.2.2:5000/users/login/', usuario);
      console.log(response); // log the response object to check its contents
      if (response.status === 201) {
        alert("Logado com sucesso");
      }
    } catch (error) {
      console.log(error); // log the error object to check its contents
      if (error.response) {
        if (error.response.status === 401) {
          alert("Credenciais invalidas");
        }
      }
    }
  }
  




  return (
     <View>
            <View >
                <Text style={styles.label}>Login</Text>
                <TextInput
                    placeholder="E-mail"
                    onChangeText={setEmail} 
                    value={usuario.email}
                />
                <Text style={styles.label}>Peso</Text>
                <TextInput
                    placeholder="**********"
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    value={usuario.senha}
                />
                <View style={styles.botao}>
                <Button
                    style={styles.botao}
                    title=
                    "Login"
                    onPress={() => handleSubmit()}
                />
                </View>


            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
