import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyReducer from "./MyReducer";
import MyContext from "./MyContext";

import Login from "./Login";
import Home from "./Home";
import PostDetails from "./PostDetails";

const Stack = createStackNavigator();

export default function App() {
  const userToken = {
    token: "",
    email: "",
    fullName: "",
  };

  const [state, dispatch] = React.useReducer(MyReducer, userToken);

  const sendRequest = (loginInfo) => {
    // const url = "http://192.168.200.44:3000/api/v1";
    fetch("https://api.jsonapi.co/rest/v1/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: "SET-TOKEN", payload: data.data });
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log(state.token);
  const clearState = () => {
    dispatch({ type: "CLEAR-STATES" });
  };

  return (
    <MyContext.Provider
      value={{
        token: state.token,
        email: state.email,
        fullName: state.fullName,
        sendRequest,
        clearState,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          {!state.token && <Stack.Screen name="Login" component={Login} />}
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };
