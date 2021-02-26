const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Iteration 1
const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  level: {type: String},
  ingredients: [ String ],
  cuisine: String,
  dishType: String,
  duration: Number,
  creator: String,
  created: {type: Date, default: new Date()}
  // image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;