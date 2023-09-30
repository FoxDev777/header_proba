import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import dataSlider from "../dataSlider/dataSlider";
import {
  positions,
  imageVariants,
  imageVariants780,
  imageVariants1280,
} from "./sliderVariants";
import {
  handleNextSlider,
  handlePrevSlider,
} from "../functions/sliderAnimatedFunctions";

import "./sliderAnimated.css";
import Button from "../components/Button/Button";

export default function SliderAnimated() {
  const [imageIndexes, setImageIndexes] = useState([0, 1, 2, 3, 4]),
    [launch, setLaunch] = useState(true),
    mqlLarge = window.matchMedia("(max-width: 1280px)"),
    mql = window.matchMedia("(max-width: 780px)");

  useEffect(() => {
    let start = setInterval(() => {
      if (launch === true) {
        handleNextSlider(setImageIndexes);
      }
    }, 5000);
    return () => clearInterval(start);
  }, [launch]);
  return (
    <>
      <div className="sliderAnimatedWrapper">
        {dataSlider.map((elem, ind) => {
          return (
            <motion.div
              key={elem.id}
              className="aloneSlideWrapper"
              initial="center"
              animate={positions[imageIndexes[ind]]}
              variants={
                mql.matches
                  ? imageVariants780
                  : mqlLarge.matches
                  ? imageVariants1280
                  : imageVariants
              }
              transition={{ duration: 0.5 }}
            >
              <h3>{elem.text_1}</h3>
              <img
                className="sliderAnimatedImage"
                onClick={() => window.open(`${elem.url}`)}
                key={ind}
                src={elem.img}
                alt="imageSlider"
              />
              <p className="sliderTextAbout">
                <span>{elem.text_2title}</span> : {elem.text_2}
              </p>
            </motion.div>
          );
        })}
      </div>
        <div className="btnWrapper">
        <Button
          nameBtn="◀Prev"
          functionClick={() => {
            handlePrevSlider(setImageIndexes);
            setLaunch(false);
          }}
          functionMouseOut={() => setLaunch(true)}
        />
        <Button
          nameBtn="Next▶"
          functionClick={() => {
            handleNextSlider(setImageIndexes);
            setLaunch(false);
          }}
          functionMouseOut={() => setLaunch(true)}
        />
        </div>
    </>
  );
}
