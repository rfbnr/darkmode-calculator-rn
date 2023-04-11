import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "flex-start",
  },
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: Colors.light,
  },
  smallTextDark: {
    fontSize: 32,
    color: Colors.black,
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: Colors.gray,
    fontWeight: "300",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: Colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});

export { Styles };
