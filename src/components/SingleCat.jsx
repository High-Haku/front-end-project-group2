import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

function SingleCat() {
  const [cat, setCat] = useState([]);

  let { id } = useParams();

  useEffect(async () => {
    const result = await axios.get(
      "https://api.thecatapi.com/v1/breeds/" + `${id}`
    );

    setCat(result.data);
  }, []);

  return (
    <>
      <br />
      <section id="catDetail">
        <Container>
          <Row className="justify-content-center">
            <Col sm={4}>
              <img
                src={
                  "https://cdn2.thecatapi.com/images/" +
                  `${cat.reference_image_id}.jpg`
                }
                className="d-block w-100"
                height={275}
                width={400}
              />
            </Col>
            <Col sm={4}>
              <h1 className="text-center">{cat.name}</h1>
              <br />
              <br />
              <span>
                <strong>Origin: </strong>
                {cat.origin} ({cat.country_code})
              </span>
              <br />
              <span>
                <strong>Lifespan: </strong>
                {cat.life_span}
              </span>
              <br />
              <span>
                <strong>Weight: </strong>
                {cat.weight?.metric} (metric), {cat.weight?.imperial}{" "}
                (imperial).
              </span>
              <br />
              <span>
                <strong>Temperament: </strong>
                {cat.temperament}.
              </span>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center text-center">
            <Col sm={8}>
              <p>{cat.description}</p>
              <hr />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={8}>
              <h5>Breed traits</h5>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4}>
              <li>Affection Level: </li>
              <ul>
                <Rating
                  ratingValue={cat.affection_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Energy Level: </li>
              <ul>
                <Rating
                  ratingValue={cat.energy_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Shedding Level: </li>
              <ul>
                <Rating
                  ratingValue={cat.shedding_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Child Friendly: </li>
              <ul>
                <Rating
                  ratingValue={cat.child_friendly * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Stranger Friendly:</li>
              <ul>
                <Rating
                  ratingValue={cat.stranger_friendly * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Adaptability: </li>
              <ul>
                <Rating
                  ratingValue={cat.adaptability * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Experimental: </li>
              <ul>
                <Rating
                  ratingValue={cat.experimental * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Grooming: </li>
              <ul>
                <Rating ratingValue={cat.grooming * 20} size={30} readonly />
              </ul>
              <li>Hairless: </li>
              <ul>
                <Rating ratingValue={cat.hairless * 20} size={30} readonly />
              </ul>
              <li>Health Issues: </li>
              <ul>
                <Rating
                  ratingValue={cat.health_issues * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Hypoallergenic: </li>
              <ul>
                <Rating
                  ratingValue={cat.hypoallergenic * 20}
                  size={30}
                  readonly
                />
              </ul>
            </Col>
            <Col sm={4}>
              <li>Indoor: </li>
              <ul>
                <Rating ratingValue={cat.indoor * 20} size={30} readonly />
              </ul>
              <li>Intelligence: </li>
              <ul>
                <Rating
                  ratingValue={cat.intelligence * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Lap: </li>
              <ul>
                <Rating ratingValue={cat.lap * 20} size={30} readonly />
              </ul>
              <li>Natural: </li>
              <ul>
                <Rating ratingValue={cat.natural * 20} size={30} readonly />
              </ul>
              <li>Rare: </li>
              <ul>
                <Rating ratingValue={cat.rare * 20} size={30} readonly />
              </ul>
              <li>Rex: </li>
              <ul>
                <Rating ratingValue={cat.rex * 20} size={30} readonly />
              </ul>
              <li>Short Legs: </li>
              <ul>
                <Rating ratingValue={cat.short_legs * 20} size={30} readonly />
              </ul>
              <li>Social Needs: </li>
              <ul>
                <Rating
                  ratingValue={cat.social_needs * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Surpressed Tail: </li>
              <ul>
                <Rating
                  ratingValue={cat.suppressed_tail * 20}
                  size={30}
                  readonly
                />
              </ul>
              <li>Vocalisation: </li>
              <ul>
                <Rating
                  ratingValue={cat.energy_level * 20}
                  size={30}
                  readonly
                />
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={8}>
              <hr />
              <h5>Articles for {cat.name}: </h5>
              <ul>
                <a href={cat.cfa_url} target="_blank">
                  {cat.cfa_url}
                </a>
              </ul>
              <ul>
                <a href={cat.vetstreet_url} target="_blank">
                  {cat.vetstreet_url}
                </a>
              </ul>
              <ul>
                <a href={cat.vcahospitals_url} target="_blank">
                  {cat.vcahospitals_url}
                </a>
              </ul>
              <ul>
                <a href={cat.wikipedia_url} target="_blank">
                  {cat.wikipedia_url}
                </a>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SingleCat;
