"use client";

import CardTestimonial from "./testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Carroussel() {
  return (
    <Swiper
      spaceBetween={24}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="w-full max-w-6xl"
    >
      <SwiperSlide>
        <CardTestimonial
          name="Felipe Sunakozawa"
          role="Desenvolvedor Freelancer"
          photo="/profile-hero.jpg"
          testimonial="O Taskly transformou minha rotina como freelancer. Hoje consigo organizar projetos, prazos e entregas sem dor de cabeça."
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardTestimonial
          name="Ana Paula"
          role="Product Designer"
          photo="/profile-hero.jpg"
          testimonial="Passei a ter clareza do que precisa ser feito no dia. O foco mudou completamente depois que comecei a usar."
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardTestimonial
          name="Lucas Martins"
          role="Empreendedor"
          photo="/profile-hero.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
            <SwiperSlide>
        <CardTestimonial
          name="Lucas Martins"
          role="Empreendedor"
          photo="/profile-hero.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>      <SwiperSlide>
        <CardTestimonial
          name="Lucas Martins"
          role="Empreendedor"
          photo="/profile-hero.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>      <SwiperSlide>
        <CardTestimonial
          name="Lucas Martins"
          role="Empreendedor"
          photo="/profile-hero.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
    </Swiper>
  );
}
