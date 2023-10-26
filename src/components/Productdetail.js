import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Productdetail = () => {
  const params = useParams();
  const segment = params.storeid;
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      name: "prerna",
      review: "It is soo cheap and easy to use",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",
      name: "Suraj",
      review: "price range is so high",
      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",
      name: "pavan",
      review: "looks awesome and recommandable",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",
      name: "satish",
      review: "Product color is ok ok",
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const obj = productsArr.filter((item) => {
    return item.id === +segment;
  });
  return (
    <section className="productdetail">
      <h2>Product Details</h2>
      <Container>
        <Row>
          {obj.map((item) => (
            <Col key={item.title}>
              <Card
                className="mb-3 carddetail"
                style={{ width: "16rem", cursor: "pointer" }}
              >
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="front-each-other"></div>
                </Card.Body>
              </Card>
              <h3>Name: {item.name} </h3>
              <p>Review: {item.review} </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Productdetail;
