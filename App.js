import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./components/BottomTabNavigator";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
