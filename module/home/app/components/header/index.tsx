import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 25,
  },
  leftContainer: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center"
  },
  button: {},
});

const HeaderComponent = () => {
  const onPress = () => {
    // Handle button press logic here
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png",
          }}
        />
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Feather name="search" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
