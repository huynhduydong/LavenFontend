import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import firstPromo from "@/public/pictures/promotion/firstPromo.jpg";
import secondPromo from "@/public/pictures/promotion/secondPromo.jpg";
import thirdPromo from "@/public/pictures/promotion/thirdPromo.jpg";
import fourthPromo from "@/public/pictures/promotion/fourthPromo.jpg";
import fifthPromo from "@/public/pictures/promotion/fifthPromo.jpg";

const CarouselPromotion = ({ imgSrc }) => {
  const imrArr = [firstPromo, secondPromo, thirdPromo, fourthPromo, fifthPromo];
  return (
    <Carousel className="w-full">
      <CarouselContent className="">
        {imrArr.map((item, index) => (
          <CarouselItem key={index}>
            <div className="items-center justify-center">
              <Image src={item} alt="Promotion" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselPromotion;
