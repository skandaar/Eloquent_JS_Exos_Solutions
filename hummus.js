// This function outputs the ingredients needed to make a batch 
// of hummus - Eloquent JS, P44

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredient_amount = amount * factor;
    if (ingredient_amount > 1) {
      unit += 's';
    }
    console.log(`${ingredient_amount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(1);
console.log();
hummus(2);
console.log();
hummus(4);
