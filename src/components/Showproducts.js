
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import CreateContext from "../store/create-context";
import { Link, useLocation } from "react-router-dom";
import classes from "./Showproducts.module.css";

const Showproducts = () => {
  const location = useLocation();
  const createContext = useContext(CreateContext);

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      quantity: 1,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",
      quantity: 1,

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",
      quantity: 1,

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",
      quantity: 1,

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  function Itemadded(id) {
    const myobj = productsArr.filter((item) => {
      return item.id === id;
    });
    createContext.addItems(myobj[0]);
  }
  return (
    <>
      
      <Container className={classes.card}>
      <Row xs={1} md={2} className="g-8">
          {productsArr.map((item) => (
            <Col key={item.title}>
              <Card className="mb-3" style={{ width: "16rem", cursor: "pointer" }}>
                <Link to={`${location.pathname}/${item.id}`}>
                  <Card.Img variant="top" src={item.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="front-each-other">
                    <Card.Text>${item.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        Itemadded(item.id);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Showproducts;




