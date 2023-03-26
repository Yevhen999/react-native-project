import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const image = require("./assets/background.png");
const avatar = require("./assets/avatar.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Image source={avatar} />
          <View>
            <Text>Регистрация</Text>
          </View>
          <View>
            <Text></Text>
            <TextInput placeholder="Логин"></TextInput>
          </View>
          <View>
            <Text></Text>
            <TextInput placeholder="Адрес электронной почты"></TextInput>
          </View>
          <View>
            <Text></Text>
            <TextInput placeholder="Пароль"></TextInput>
          </View>
          <TouchableOpacity>
            <Text>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
