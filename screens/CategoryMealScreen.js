import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters...</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
