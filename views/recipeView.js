const recipeViewList = (resp) => {

    const listado = document.getElementById("listRecipes");

    const fragment = new DocumentFragment();

    const tem = document.getElementById("templateList").content;

    resp.forEach(element => {

        tem.querySelector("li").textContent = element.strMeal;

        const miElemento = tem.cloneNode(true);

        fragment.appendChild(miElemento);

    });

    listado.appendChild(fragment);
};

export { recipeViewList };
