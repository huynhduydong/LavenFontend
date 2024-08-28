import React from "react";

const CategoryCard = ({ categoryItem }) => {
  return (
    <div className="p-4 w-52 h-40 hover:shadow-xl">
      <div className="flex justify-center">
        <img
          src={categoryItem.url}
          alt={categoryItem.name}
          className="w-20 h-20"
        />
      </div>
      <div className="text-center text-sm mt-6">{categoryItem.name}</div>
    </div>
  );
};

export default CategoryCard;
