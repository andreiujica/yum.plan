export interface RecipeItem {
  quantity: number;
  ingredientId: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: RecipeItem[];
}
