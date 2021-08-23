import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ItemBlock, Categories, SortPopup } from "../components/";

import { setCategory } from "../redux/actions/filters";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);

    //мемоизируем ф-цию, useCallback один раз сохраняет ф-цию и больше ее не выполняет

    const onSelectCategory = useCallback(
        (index) => {
            dispatch(setCategory(index));
        },
        [],
    );

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items &&
                    items.map((obj) => <ItemBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    );
}

export default Home;
