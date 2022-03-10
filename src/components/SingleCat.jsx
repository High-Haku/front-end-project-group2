import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Button, Tooltip } from "antd";
import RecommendationProduct from "./recommendationProduct";

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
            <Col sm={5}>
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
            <Col sm={9}>
              <p>{cat.description}</p>
              <hr />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={9}>
              <h5>Breed traits</h5>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-lg-3 col-md-4 col-10">
              <p>
                <Tooltip title="Amount of warmth or friendliness displayed.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Affection Level :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.affection_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="Level of activity often exhibited.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Energy Level :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.energy_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="Level and frequency of cat hair shedding.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Shedding Level :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.shedding_level * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="Cats that tend to be more playful and easygoing around children and are more tolerant of children's behavior.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Child Friendly :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.child_friendly * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="Tendency to enjoy or tolerate dogs.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Dog Friendly :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.dog_friendly * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="Tendency to be welcoming to new people.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Stranger Friendly :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.stranger_friendly * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="How easily a cat deals with change.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Adaptability :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.adaptability * 20}
                  size={30}
                  readonly
                />
              </ul>
            </Col>
            <Col className="col-lg-3 col-md-4 col-10">
              <p>
                <Tooltip title="Amount of bathing, brushing, even professional grooming needed.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Grooming :
              </p>
              <ul>
                <Rating ratingValue={cat.grooming * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Hairless :
              </p>
              <ul>
                <Rating ratingValue={cat.hairless * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="Level of health issues a breed tends to have.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Health Issues :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.health_issues * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Hypoallergenic :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.hypoallergenic * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Indoor :
              </p>
              <ul>
                <Rating ratingValue={cat.indoor * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="A cat's thinking and problem-solving ability (not trainability).">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Intelligence :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.intelligence * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Lap :
              </p>
              <ul>
                <Rating ratingValue={cat.lap * 20} size={30} readonly />
              </ul>
            </Col>
            <Col className="col-lg-3 col-md-4 col-10">
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Natural :
              </p>
              <ul>
                <Rating ratingValue={cat.natural * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Rare :
              </p>
              <ul>
                <Rating ratingValue={cat.rare * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Rex :
              </p>
              <ul>
                <Rating ratingValue={cat.rex * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Short Legs :
              </p>
              <ul>
                <Rating ratingValue={cat.short_legs * 20} size={30} readonly />
              </ul>
              <p>
                <Tooltip title="Preferred amount of interaction with other pets and humans.">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Social Needs :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.social_needs * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Suppressed Tail :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.suppressed_tail * 20}
                  size={30}
                  readonly
                />
              </ul>
              <p>
                <Tooltip title="">
                  {" "}
                  <Button type="primary" shape="circle" size="small">
                    i
                  </Button>
                </Tooltip>{" "}
                Vocalisation :
              </p>
              <ul>
                <Rating
                  ratingValue={cat.vocalisation * 20}
                  size={30}
                  readonly
                />
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={9}>
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
          <RecommendationProduct/>
        </Container>
      </section>
    </>
  );
}

export default SingleCat;
