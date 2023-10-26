import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";
import Opencart from "./Opencart";
import CreateContext from "../store/create-context";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const createcontext = useContext(CreateContext);
  function openCart() {
    setOpen(true);
  }
  let quantity = 0;
  for (const item of createcontext.item) {
    quantity += item.quantity;
  }

  return (
    <>
      {open && <Opencart setopen={setOpen} />}
      <div>
        <Button variant="info" onClick={openCart}>
          Cart
        </Button>
        <span className="button-gap"></span>
        <Button variant="outline-info">{quantity}</Button>
      </div>
    </>
  );
};

export default Cart;
