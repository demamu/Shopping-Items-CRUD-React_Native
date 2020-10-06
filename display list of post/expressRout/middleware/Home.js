import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import MyContext from "./MyContext";

export default function Home({ navigation }) {
  const myContext = React.useContext(MyContext);
  const { clearState } = myContext;
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const options = {
      methods: "GET",
      header: {
        "const-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://api.jsonapi.co/rest/v1/user/list?limit=5&page=2")
      .then((res) => res.json())
      .then((data) => setPost(data.data.users))
      .catch((err) => console.log(err));
  }, []);
  const renderItems = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Button
          title=" More"
          onPress={() => {
            navigation.navigate("PostDetails", { email: item.name });
          }}
        />
      </View>
    );
  };
  const returntologin = () => {
    clearState();
   navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Logout" onPress={returntologin} />
      <View>
        <FlatList
          data={post}
          renderItem={renderItems}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
