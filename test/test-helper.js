function createMealDay() {
  var mealDay = {}
  mealDay.breakfast = [{"name": "banana", "calories": "100"}, {"name": "apple", "calories": "10"}, {"name": "ham", "calories": "26"}]
  mealDay.lunch = [{"name": "banana", "calories": "100"}, {"name": "apple", "calories": "25"}];
  return mealDay;
};

function getLength(obj){
  return Object.keys(obj).length
}

function getPage(page, onLoad){
  document.getElementById("diary-frame").src = page;
  document.getElementById("diary-frame").onload = onLoad;
}
