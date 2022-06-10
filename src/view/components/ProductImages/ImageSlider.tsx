import { Box, Button, IconButton } from "@mui/material";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { ImageSliderItem } from "./ImageSliderItem";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Props = { images: string[] };

export const ImageSlider: FunctionComponent<Props> = ({ images }) => {
  const sliderRef = useRef<HTMLElement>(null);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const sliderItemMarginRight = 1;
  const sliderItemWidth = 90;
  const slideSize = 8 * sliderItemMarginRight + sliderItemWidth;

  const handleSlideMove = () => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transitionDuration = "1s";
    sliderRef.current.style.transform = `translateX(${
      currentTranslate - slideSize
    }px)`;
    setCurrentTranslate((prev) => prev - slideSize);
  };

  const handleSlideMoveLeft = () => {
    if (currentTranslate >= 0) return;
    if (!sliderRef.current) return;
    sliderRef.current.style.transitionDuration = "1s";
    sliderRef.current.style.transform = `translateX(${
      currentTranslate + slideSize
    }px)`;
    setCurrentTranslate((prev) => prev + slideSize);
  };

  const showSlideLeftButton = () => {
    if (!sliderRef.current) return false;
    const width = sliderRef.current.offsetWidth;
    const fullSliderWidth = slideSize * images.length;
    if (!(fullSliderWidth > width)) return false;
    if (currentTranslate >= 0) return false;
    return true;
  };

  const showSlideRightButton = () => {
    if (!sliderRef.current) return false;
    const width = sliderRef.current.offsetWidth;
    const fullSliderWidth = slideSize * images.length * 3;
    if (fullSliderWidth + currentTranslate <= width) return false;
    if (!(fullSliderWidth > width)) return false;
    return true;
  };

  return (
    <Box
      sx={{
        // border: "1px solid black",
        p: 1,
        mt: 1,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", zIndex: 1, right: 0, top: 45 }}>
        {showSlideRightButton() && (
          <IconButton
            aria-label="slider-left"
            onClick={handleSlideMove}
            sx={{
              backgroundColor: "white",
              border: "1px solid",
              borderColor: "secondary.main",
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={{ position: "absolute", zIndex: 2, left: 0, top: 45 }}>
        {showSlideLeftButton() && (
          <IconButton
            aria-label="slider-left"
            onClick={handleSlideMoveLeft}
            sx={{
              backgroundColor: "white",
              border: "1px solid",
              borderColor: "secondary.main",
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={{}} ref={sliderRef}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {images.concat(["1", "2", "3", "4", "5", "6"]).map((image) => (
            // <Item key={i}>{i}</Item>
            <ImageSliderItem
              key={image}
              image={image}
              mr={sliderItemMarginRight}
              width={sliderItemWidth}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
