import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CreateContext from "../store/create-context";
const portalElement = document.getElementById("overlays");

const Opencart = (props) => {
  const createContext = useContext(CreateContext);
  function closeCart() {
    props.setopen(false);
  }
  function removeItemCart(id) {
    createContext.removeItems(id);
  }
  let multiplyItemsandPrice = 0;
  for (const item of createContext.item) {
    multiplyItemsandPrice += +item.price * item.quantity;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div className="myCart">
          <div className="front-each-other">
            <h3>Cart</h3>
            <Button
              variant="outline-warning"
              className="crossbtn"
              onClick={closeCart}
            >
              &#10060;
            </Button>
          </div>
          <div className="heading-myCart">
            <h4>Item</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
          </div>
          {createContext.item.map((item) => (
            <div className="flexitems" key={item.title}>
              <div>
                <Image
                  className="imgclass"
                  src={item.imageUrl}
                  rounded
                  height={"100px"}
                  width={"100px"}
                />
                <div>{item.title}</div>
              </div>
              <div>{item.price}</div>
              <div>
                <span>
                  <Button variant="outline-warning">{item.quantity}</Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      removeItemCart(item.id);
                    }}
                  >
                    Remove
                  </Button>
                </span>
              </div>
            </div>
          ))}
          <h3>Total Price : {multiplyItemsandPrice} </h3>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Opencart;
