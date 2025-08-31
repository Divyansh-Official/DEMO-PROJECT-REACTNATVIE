// import { ThemeContext} from "@react-navigation/native";
// import { Link } from "expo-router";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { toggleDarkMode, colors } = useTheme(); 

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo);

  const clearAllTodos = useMutation(api.todos.clearAllTodo);

  const homeStyles = createHomeStyles(colors);


  return (
    <SafeAreaView style={homeStyles.container}>
      
      <View>
        <TouchableOpacity onPress={toggleDarkMode}>
                    <Text>Change Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addTodo({text: "New Todo"})}>
                    <Text>Add a new todo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => clearAllTodos()}>
                    <Text>Clear all todos</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


// const createStyles = (colors: ColorScheme) => {

//   const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 10,
//     backgroundColor: colors.bg,
//   },

// });

//   return styles;

// }