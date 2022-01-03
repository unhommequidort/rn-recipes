import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import DefaultText from "./DefaultText";

const MealItem = (props) => {
  // let TouchableComponent =
  //   Platform.OS === "android" && Platform.Version >= 21
  //     ? TouchableNativeFeedback
  //     : TouchableOpacity;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.item.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.item.duration}m</DefaultText>
            <DefaultText>{props.item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",

    textAlign: "center",
  },
});

export default MealItem;
