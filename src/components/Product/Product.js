import { faCartShopping, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
  const { title, price, image } = props.product;
  return (
    <div>
      <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mx-auto">
        <img
          className="h-40 object-cover rounded-xl mx-auto"
          src={image}
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2 ">{title}</h2>

          <p className="text-sm text-gray-600">
            <FontAwesomeIcon icon={faDollar} />
            {price}
          </p>
        </div>

        <div className="m-2">
          <button className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
            Add To Cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
