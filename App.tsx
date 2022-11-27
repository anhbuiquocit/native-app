import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header, Input } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";
// import 'material-icons/iconfont/material-icons.css';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress() {
              console.log("Clicking on the menu");
            },
          }}
          centerComponent={{
            text: "Bui Quoc Anh",
            color: "#fff",
            style:{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#fff'
            }
          }}
          rightComponent={{
            icon: "",
            color: "#fff",
          }}
        />
      </View>

      {/* Mesage container */}
      <StatusBar style="auto" />
      <View style={styles.viewChatContainer}>
        {/* <TextInput style={styles.inputText} placeholder="Enter your mesage" /> */}
        <Input />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  colorText: {
    color: "#000",
  },
  inputText: {
    borderColor: "#000",
    borderWidth: 0.5,
    backgroundColor: "#bdbdbd",
  },
  viewChatContainer: {
    bottom: 0,
    width: "100%",
  },
  fontSize20: {
    fontSize: 20,
  },
  headerContainer: {
    marginTop: 20,
    backgroundColor: "#918484",
    width: "100%",
    height: "5%",
    display: "flex",
    // justifyContent: 'flex-start',
    fontSize: 20,
    // height: '30px'
  },
});
