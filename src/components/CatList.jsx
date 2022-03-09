import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCatAction } from "../Redux/Actions/catListAction";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const CatList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.catListReducer.data);

  const [inputSearch, setInputSearch] = useState("");

  useEffect(async () => {
    dispatch(getCatAction());
  }, []);

  const handleClick = (cat) => {
    navigate(`/cats/${cat.id}`);
  };

  const styleText = cats.length === 0 ? { color: "black" } : { color: "white" }; //internal CSS

  return (
    <div id="body" className="text-center justify-content-center">
      <br />
      <input
        type="text"
        placeholder="Search by Name or Origin"
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <br />
      <br />
      <h1 style={styleText}>List of Breeds</h1>
      <br />
      <br />
      <Container my={5}>
        <Row gy={3}>
          {cats
            .filter((cat) => {
              if (inputSearch === "") {
                return cat;
              } else if (
                cat.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
                cat.origin.toLowerCase().includes(inputSearch.toLowerCase())
              ) {
                return cat;
              }
            })
            .map((cat, index) => (
              <Col key={index} mt={2} lg={3} md={4} col={10} className="mt-5">
                <Card>
                  <Card.Img
                    variant="top"
                    src={cat.image?.url}
                    alt=""
                    height={200}
                    width={150}
                  />
                  <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                    <Card.Text>{cat.origin}</Card.Text>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<SearchOutlined />}
                      size="large"
                      onClick={() => handleClick(cat)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CatList;
