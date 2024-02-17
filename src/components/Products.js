import React from "react";
import { IoBagAdd } from "react-icons/io5";

const Products = ({ activeCat, products }) => {
  //   console.log(products);
  return (
    <div>
      <h1 className="text-4xl font-bold m-4 text-yellow-400">{activeCat}</h1>
      <ul className="flex flex-row justify-between flex-wrap">
        {products &&
          products.map((prodObj) => (
            <li key={prodObj.id} className="m-2 mb-6 bg-slate-500 rounded-md">
              <img
                src={prodObj.images[0]}
                className="w-[283px] h-[400px] rounded-t-md min-w-full"
                alt="product-img"
              />
              <h2 className="m-2">{prodObj.title}</h2>
              <div className="flex flex-row justify-between m-2">
                <p className="text-xl font-semibold">
                  $ {prodObj.discountPercentage}{" "}
                  <span className="line-through text-sm">{prodObj.price}</span>
                  <span className="mx-2 text-sm text-green-400">
                    (
                    {Math.round(
                      (prodObj.discountPercentage / prodObj.price) * 100
                    )}
                    %)
                  </span>
                </p>
                <IoBagAdd size={25} className="cursor-pointer" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
