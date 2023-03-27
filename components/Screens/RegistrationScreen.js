import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const addUserPhoto = require("../../assets/add-avatar.png");

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.wrap, paddingBottom: isShowKeyboard ? 20 : 78 }}>
        <View style={styles.userImage}>
          <TouchableOpacity style={styles.addAvatar}>
            <Image source={addUserPhoto} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            // value={password}
            secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}
          />
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.btnRegistration}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bottomText}>Уже есть аккаунт? Войти</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
    // paddingBottom: 78,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
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
    right: -12.5,
    bottom: 26,
  },
  title: {
    color: "#212121",
    marginTop: 92,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  inputWrap: {
    width: "100%",
    marginTop: 32,
  },
  input: {
    height: 50,
    marginTop: 16,
    marginHorizontal: 16,
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btnWrap: {
    width: "100%",
  },
  btnRegistration: {
    alignItems: "center",
    marginTop: 43,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  bottomText: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
