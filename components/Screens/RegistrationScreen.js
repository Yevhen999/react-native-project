import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.userImage} />
      <TouchableOpacity style={styles.addAvatar}>
        <Image source={require("../../assets/add-avatar.png")} />
      </TouchableOpacity>

      <Text>Регистрация</Text>

      <View>
        <TextInput style={styles.input} placeholder="Логин"></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
        ></TextInput>

        <TextInput style={styles.input} placeholder="Пароль"></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.btnRegistration}>
          <Text style={styles.btnText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 92,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
  },
  userImage: {
    position: "absolute",
    top: -60,
    // right: Dimensions.get("window").width / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatar: {
    position: "absolute",
    right: 125,
    bottom: 400,
  },
  input: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btnRegistration: {
    alignItems: "center",
    marginTop: 43,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    color: "white",
  },
});

export default RegistrationScreen;
