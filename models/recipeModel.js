const recipe = async () => {

    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );

    const data = await response.json();

    return data.meals;
};

export { recipe };