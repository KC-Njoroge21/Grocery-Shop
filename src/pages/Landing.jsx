import React from "react";
import { TbShoppingCartSearch } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Landing = () => {
  return (
    <div>
      <section className="relative z-0 h-fit flex items-center pt-40 sm:pt-20 mb-22">
        <div className="flex flex-col gap-7 sm:flex-row sm:justify-between">
          <div className="flex flex-col  gap-6  p-4 sm:h-screen justify-center ">
            <div className="flex flex-col gap-2">
              <h1 className="lg:text-7xl text-3xl font-bold">Shop Smarter</h1>
              <h2 className="lg:text-6xl text-3xl text-green-500 font-bold">
                Save More
              </h2>
            </div>

            <p>
              Track grocery prices, scan barcodes, and never miss a <br /> deal.
              Your personal shopping assistant for smarter <br /> grocery
              decisions.
            </p>

            <div className="flex sm:flex-row flex-col gap-4">
              <button className="p-2 bg-black text-white rounded-lg font-semibold focus:opacity-75 cursor-pointer">
                Start Shopping
              </button>
              <button className="p-2 border border-gray-300 rounded-lg focus:bg-gray-200 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <div className="sm:w-1/2 p-3 sm:p-0 ">
            <div className="hidden lg:inline-block lg:w-full lg:h-30"></div>
            <div className="sm:h-screen relative mx-auto h-90">
              <img
                className="h-full w-full sm:w-[90%] object-cover rounded-2xl"
                src="/images/landing-image.jpg"
                alt=""
              />
            </div>
            <div className="p-3 bg-green-500 absolute -bottom-8 right-1 sm:w-50 w-40 rounded-lg text-center">
              <h2 className="sm:text-3xl text-2xl font-semibold text-white">
                Save up to
              </h2>
              <h1 className="sm:text-5xl text-4xl font-bold text-white">30%</h1>
              <h4 className="text-white font-semibold">on groceries</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 ">
        <div className="flex flex-col items-center gap-4 p-10">
          <h2 className="sm:text-4xl text-3xl text-center font-bold">
            Everything You Need to Save
          </h2>
          <p className="text-gray-500 text-center sm:text-lg ">
            Powerful features designed to help you track prices, manage shopping
            lists, and <br /> make smarter purchasing decisions.
          </p>
        </div>

        <div className="flex gap-8 flex-wrap pb-16 ">
          <div className="flex-1 flex flex-col shadow-lg border border-gray-300 rounded-xl gap-4 min-w-70 bg-white">
            <div className="w-full h-80">
              <img
                className="object-cover rounded-t-xl h-full w-full"
                src="/images/landing-search.jpg"
                alt="Search Img"
              />
            </div>
            <div className="p-4">
              <div>
                <img src="" alt="" />
                <h3 className="text-2xl font-semibold">
                  Smart Search & Filters
                </h3>
              </div>
              <p className="text-gray-500">
                Allows users to quickly find products by searching and filtering
                based on categories, price, or name, improving navigation and
                overall user experience.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col shadow-lg border border-gray-300 rounded-xl  gap-4 min-w-70 bg-white">
            <div className="w-full h-80">
              <img
                className="object-cover h-full rounded-t-xl w-full"
                src="/images/landing-fav.jpg"
                alt="Search Img"
              />
            </div>
            <div className="p-4">
              <div className="">
                <img src="" alt="" />
                <h3 className="text-2xl font-semibold">
                  Whishlist / Favorites
                </h3>
              </div>
              <p className="text-gray-500">
                Enables users to save and manage their favorite products for
                future purchases, making the shopping experience more
                personalized and convenient.
              </p>
            </div>
          </div>

          <div className="flex-1 flex shadow-lg border border-gray-300 rounded-xl flex-col gap-4 min-w-70 bg-white">
            <div className="w-full h-80">
              <img
                className="object-cover rounded-t-xl h-full w-full"
                src="/images/landing-checkout.jpg"
                alt="Search Img"
              />
            </div>
            <div className="p-4">
              <div>
                <img src="" alt="" />
                <h3 className="text-2xl font-semibold">
                  Cart & Checkout System
                </h3>
              </div>
              <p className="text-gray-500">
                Provides functionality to add, remove, and manage items in a
                cart, automatically calculate totals, and simulate a checkout
                process for completing purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col  gap-14 items-center justify-center ">
        <div className="mt-18 mb-18">
          
            <div className="flex flex-col items-center  gap-4">
              <h2 className="text-4xl font-bold">How It Works</h2>
              <h5 className="text-gray-500 text-lg">
                Start saving in three simple steps
              </h5>
            </div>

            <div className="flex justify-between  flex-wrap">
              <div className="flex flex-1 flex-col items-center text-center gap-4 min-w-75">
                <div className="bg-green-500 p-2  rounded-full">
                  <TbShoppingCartSearch className="text-white" size={40} />
                </div>
                <div className="flex flex-col gap-3">
                  <h6 className="text-green-500 font-semibold">Step 1</h6>
                  <h5 className="text-xl font-semibold">
                    Browse & Select Products
                  </h5>
                  <p className="text-gray-500">
                    Users explore available grocery items, search for what they
                    need, and add products to their cart.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center text-center gap-4 min-w-75">
                <div className="bg-green-500 p-2 rounded-full">
                  <IoBagCheckOutline className="text-white" size={40} />
                </div>
                <div className="flex flex-col gap-3">
                  <h6 className="text-green-500 font-semibold">Step 2</h6>
                  <h5 className="text-xl font-semibold">
                    Review Cart & Checkout
                  </h5>
                  <p className="text-gray-500">
                    They view selected items, adjust quantities if needed, and
                    proceed to checkout to place their order.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center gap-4 text-center min-w-75">
                <div className="bg-green-500 p-2 rounded-full">
                  <MdOutlineDeliveryDining className="text-white" size={40} />
                </div>
                <div className="flex flex-col gap-3">
                  <h6 className="text-green-500 font-semibold">Step 3</h6>
                  <h5 className="text-xl font-semibold">Order & Delivery</h5>
                  <p className="text-gray-500">
                    The order is processed, and groceries are delivered to the
                    user’s location (or prepared for pickup).
                  </p>
                </div>
              </div>
            </div>
          
        </div>
      </section>

      <section className="bg-green-500 p-12 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="sm:text-4xl text-3xl font-bold text-center text-white">
            Ready to Start Shopping?
          </h2>
          <h5 className="text-center text-white text-lg">
            Join thousands of smart shoppers who are already saving money on
            their groceries. Start <br />
            shopping today-it's completely free!{" "}
          </h5>
          <div className="flex justify-center">
            <button className="p-2 flex gap-3 items-center bg-gray-100 w-fit rounded-lg font-semibold">
              <MdOutlineShoppingCartCheckout size={20} /> Start Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
