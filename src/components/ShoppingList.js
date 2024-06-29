import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
 

  const handleCategory = (e) =>  {setSelectedCategory(e.target.value); console.log(e.target.value)}
  
  let filteredItems = [] 
  selectedCategory==="All" ? filteredItems=items : filteredItems=items.filter((item)=> item.category === selectedCategory)
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
