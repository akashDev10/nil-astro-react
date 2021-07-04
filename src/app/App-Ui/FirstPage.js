import React from "react";
import { Carousel} from "react-bootstrap";

import classes from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <div className="col-md-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className={classes.imgs}
                src={require("../../assets/images/astro/p2.svg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className={classes.box}>
                  <h3 className={classes.h3}>Importance of astrology</h3>
                  <p className={classes.p}>
                    Astrology is an ancient concept, as old as time, you can
                    say. It is an importance aspect of our lives – our past,
                    present and future. To a great extent, astrology is used to
                    forecast and predict future events and can also be used as a
                    medium to get rid of any kind of mishap related to planetary
                    positions.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className={classes.imgs}
                src={require("../../assets/images/astro/p3.svg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <div className={classes.box}>
                  <h3 className={classes.h3}>What we do in NilAstro</h3>
                  <p className={classes.p}>
                    This platform leverages technology to provide traditional
                    services including online consultation with experienced
                    astrologers for career, personal and financial life
                    guidance, Tarot Readers, Numerologists, Vastu experts, and
                    Fengshui experts to help the young population across the
                    world find guidance, direction, and happiness in their life.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={classes.imgs}
                src={require("../../assets/images/astro/p1.svg")}
                alt="Third slide"
              />
              <Carousel.Caption>
              <div className={classes.box}>
                  <h3 className={classes.h3}>Have questions about your life?</h3>
                  <p className={classes.p}>
                  Nilastro is one such technology-driven astrology startup based
                    in Kolkata,bringing both astrologers and consumers
                  together on its tech platform. One can get predictions related
                  to love life, marriage, career, etc.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
