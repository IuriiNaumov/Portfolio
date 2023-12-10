import React from "react";
import styles from "./component.module.css";
import Carousel from "react-bootstrap/Carousel";
import {
  ArrowCLeftIcon32Regular,
  ArrowCRightIcon32Regular,
} from "@skbkontur/icons";
import { useState } from "react";
import classNames from "classnames";

function Slider({ imgList }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={null}
      indicators={false}
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
      prevIcon={
        <button className={classNames(styles.button, styles.leftButton)}>
          <ArrowCLeftIcon32Regular fill="#333" className={styles.arrow} />
        </button>
      }
      nextIcon={
        <button className={classNames(styles.button, styles.rightButton)}>
          <ArrowCRightIcon32Regular fill="#333" className={styles.arrow} />
        </button>
      }
    >
      {imgList.map((img, index) => {
        return (
          <Carousel.Item key={index}>
            <img src={img} className={styles.img}></img>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Slider;
