import React from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import MyContext from "./MyContext";

const Login = () => {
  const myContext = React.useContext(MyContext);
  const { sendRequest } = myContext;
  const [loginInfo, setLoginInfo] = React.useState({ email: "", password: "" });

  const emailSetter = (email) => {
    setLoginInfo((preValue) => ({ ...preValue, email }));
  };
  const passwordSetter = (password) => {
    setLoginInfo((preValue) => ({ ...preValue, password }));
  };
  const onSubmit = () => {
    sendRequest({"name":"abc","email":"abc@gmail.com","password":"password"});
  };
  



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={loginInfo.email}
        onChangeText={emailSetter}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        value={loginInfo.password}
        onChangeText={passwordSetter}
      />

      <Button title="Login" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    marginVertical: 10,
  },
  contact: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    height: 40,
    width: "90%",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    paddingLeft: 10,
  },
});

export default Login;
