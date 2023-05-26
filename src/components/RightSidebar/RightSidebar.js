import React from "react";
import Category from "./Category";

const RightSidebar = () => {
  return (
    <div className="w-3/4 bg-white rounded pt-2 pl-2 ">
      <Category nameCategory={"Tecnología"} />
      <Category nameCategory={"Deportes"}/>
    </div>
  );
};

export default RightSidebar;
