import React from "react";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";


const CartProduct = (props) => {

  const dispatch = useDispatch()

  const incrementQuantity = () => {
    dispatch(cartActions.addToCart({
      id: props.item.id,
      name:props.item.name,
      price: props.item.price,
      image: props.item.image,
      quantity: props.item.quantity,
      source: props.item.source,
      category: props.item.category,
      totalPrice: props.item.totalPrice
    }))
  }

  const decrementQuantity = () => {
    dispatch(cartActions.removeFromCart(props.item.id))
  }

  return (
    <div key={props.item.id} className="flex min-w-75 border rounded-xl border-gray-300 flex-col gap-8 p-6">
      <div className="flex gap-6">
        <div className="w-20 h-20 border border-gray-200 rounded-xl bg-gray-200 p-2">
        <img src={props.item.image} alt={props.item.name} />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">{props.item.name}</h3>
            <h6 className="text-gray-500">{props.item.source}</h6>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="px-2 rounded-lg w-fit text-gray-500 border border-gray-300">
              {props.item.category}
            </h6>
            <h2 className="text-lg text-green-500 font-semibold">
              Ksh {props.item.price} <span className="text-sm text-gray-500"> at {props.item.source}</span>
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              <button onClick={decrementQuantity} className="p-2 border-gray-300 border rounded-lg focus:bg-gray-300 "><FiMinus size={10} /></button>
              <h6>{props.item.quantity}</h6>
              <button onClick={incrementQuantity} className="p-2 border-gray-300 border rounded-lg focus:bg-gray-300 "><LuPlus size={10} /></button>
            </div>
            <div>
              <h6 className="font-semibold">Total: {props.item.totalPrice}</h6>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CartProduct;
