import React from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux/counter";
import TitleHoc from "../hoc/TitleHoc";

const Cart = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.counter);
  const cartObj = useSelector((state) => state.counter.cartItems);

  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartObj));
  }

  const incrementHandler = (product) => {
    dispatch(counterActions.increment(product));
  };

  const decrementHandler = (product) => {
    dispatch(counterActions.decrement(product));
  };

  const removeProdect = (id) => {
    dispatch(counterActions.removeCartItem(id));
  };

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartObj.length} items </h5>
                </div>
                {cartObj &&
                  cartObj?.map((product) => (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={product?.image}
                              className="w-100"
                              alt="image"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong> {product?.category}</strong>
                          </p>
                          <p>{product?.title}</p>
                          <button
                            onClick={() => removeProdect(product)}
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                          >
                            <i className="bi bi-trash3"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="bi bi-heart"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() => incrementHandler(product.id)}
                            >
                              <i className="bi bi-plus-lg"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={
                                  product.quantity ? product?.quantity : "1"
                                }
                                type="number"
                                className="form-control"
                              />
                              <label className="form-label" for="form1">
                                Quantity
                              </label>
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() => decrementHandler(product.id)}
                            >
                              <i className="bi bi-dash-lg"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>
                              $
                              {product?.total ? product?.total : product?.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TitleHoc(Cart, "My Cart");
