import React, { useState } from "react";
import Filter from "./Filter"

function CategoryFilter(props) {
  const [isSelected, setIsSelected] = useState(false)

  function handleSelect(){
    setIsSelected(!isSelected)
  }
  console.log(isSelected)

  //console.log(props)
  let categories = props.categoryList.map((list) => {
    return <Filter list={list} />
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories}
    </div>
  );
}

export default CategoryFilter;
