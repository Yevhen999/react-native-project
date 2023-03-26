import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const avatar = require("../assets/avatar.png");

export const LoginScreen = () => {
  return (
    <View style={styles.wrap}>
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
  );
};

const styles = StyleSheet.create({
  //   wrap: {
  //     backgroundColor: "white",
  //     borderTopLeftRadius: 25,
  //     borderTopRightRadius: 25,
  //   },
});

export default LoginScreen;
