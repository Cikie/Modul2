let recipe = {
        'title': 'Sườn xào chua ngọt',
        'servings': 2,
        'ingredients': ['400g sườn thăn',
            '4tbsp nước mắm',
            '5tsp đường',
            '5 tsp nước chanh',
            'Hành khô,tỏi ớt',
            '2 quả cà chua',
            '1/3 bát nước sôi',
            'Ớt chuông']
};
console.log('Tên món ăn :' + recipe.title)
console.log('Khẩu phần ăn :' + recipe.servings)
console.log('Thành phần: ');
for (let i = 0; i <recipe.ingredients.length ; i++) {
    console.log('- ' + recipe.ingredients[i])
}