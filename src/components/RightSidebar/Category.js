import React from "react";
import SubCategory from './SubCategory'

import { useState } from "react";

const Category = ({ nameCategory }) => {
  const [isSubCategoryActive, setIsSubCategoryActive] = useState(false);
  return (
    <div>
      <button onClick={()=>setIsSubCategoryActive(!isSubCategoryActive)}>{nameCategory}</button>
      {isSubCategoryActive && (
        <SubCategory nameCategory={"Inteligencia artificial"}/>
      )}
    </div>
  );
};

export default Category;
