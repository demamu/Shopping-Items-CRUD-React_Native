import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

const PostDetails = ({ route, navigation }) => {
  const { email } = route.params;
  return (
    <View>
      <Text>{email}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
export default PostDetails;
