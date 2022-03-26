import {
  faArrowCircleDown,
  faArrowCircleRight,
  faHand,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ cart, resetCart, selectRandomProduct, selectedProduct }) => {
  return (
    <div className="mx-auto mt-4">
      <div className="flex items-center justify-center bg-white">
        <div className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
          {cart.map((pd) => (
            <p className="text-xl text-gray-700 font-semibold mt-3">
              <FontAwesomeIcon icon={faArrowCircleRight} /> {pd.title}
            </p>
          ))}
          <button
            onClick={selectRandomProduct}
            className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50"
          >
            Choose 1 For me <FontAwesomeIcon icon={faHand} />
          </button>
          <p className="text-lg text-gray-700 font-semibold mt-3">
            Your selected product is:{' '}
            <FontAwesomeIcon icon={faArrowCircleDown} />{' '}
            <span className="text-red-400">
              {selectedProduct ? selectedProduct.title : ''}
            </span>
          </p>

          <button
            onClick={resetCart}
            className="mt-5 w-full py-3 rounded-xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-gray-50"
          >
            Select Again <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
