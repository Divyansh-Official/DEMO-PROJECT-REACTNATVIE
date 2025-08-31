// import { ThemeContext} from "@react-navigation/native";
// import { Link } from "expo-router";
import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode } = useTheme(); 

  return (
    <View style={styles.container}>
      
      <View>
        <TouchableOpacity onPress={toggleDarkMode}>
                    <Text>Change Theme</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

})