import { StyleSheet } from "react-native";

const next = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    height: 45
  };

const nextText = {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 4,
}  

const container = {
  flexDirection: "column",
    position: "relative",
    flex: 1
}

const Styles = StyleSheet.create({
  containerPrimary: {
    backgroundColor: "#f36363",
    ...container
  },
  containerWhite: {
    backgroundColor: "white",
    ...container
  },
  h1: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  h2: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 15,
    color: "white",
    textAlign: "center"
  },
  nextWhite: {
    backgroundColor: "white",
    ...next
  },
  nextPrimary: {
    backgroundColor: "#f36363",
    ...next
  },

  nextTextWhite: {
    color: "black",
    ...nextText
  },
  nextTextPrimary: {
    color: "white",
    ...nextText
  },
  input: {
    color: "#505050",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "bold"
  },
  arrow: {
    position: "absolute",
    right: 10,
    bottom: 9
  },
  kingHeader: {
    height: 180,
    backgroundColor: "#f36363",
    textAlign: "center"

  },
  kingHeaderText: {
    color: "#ffffff",
    fontSize: 32,
    textAlign: "center"

  }
})

export default Styles;
