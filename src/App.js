import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("smartphones");
  // console.log(activeCategory);
  const [productsList, setProductsList] = useState([]);
  // console.log(productsList);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories([...data]);
      setActiveCategory(data[0]);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${activeCategory}`
      );
      const data = await response.json();
      setProductsList(data.products);
    };
    fetchCategories();
  }, [activeCategory]);

  const changeActiveCategory = (cat) => {
    setActiveCategory(cat);
  };

  const gotoHome = () => {
    setActiveCategory("smartphones");
  };

  return (
    <div className="ps-[30px] pe-[30px]">
      <Navbar
        categories={categories}
        activeCat={activeCategory}
        changeCat={changeActiveCategory}
        onClickLogo={gotoHome}
      />
      <Products activeCat={activeCategory} products={productsList} />
    </div>
  );
}

export default App;
