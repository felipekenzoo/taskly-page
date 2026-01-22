"use client";

import CardTestimonial from "./testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carroussel() {
  return (
    <Swiper
      spaceBetween={24}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
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
      className="w-full max-w-6xl [--swiper-navigation-color:#9ca3af] [--swiper-pagination-color:#9ca3af]"
    >
      <SwiperSlide>
        <CardTestimonial
          name="Felipe Sunakozawa"
          role="Desenvolvedor Front-end"
          photo="/profile-hero.jpg"
          testimonial="O Taskly transformou minha rotina como freelancer. Hoje consigo organizar projetos, prazos e entregas sem dor de cabeça."
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardTestimonial
          name="Ana Paula"
          role="Product Designer"
          photo="/profile-2.jpg"
          testimonial="Passei a ter clareza do que precisa ser feito no dia. O foco mudou completamente depois que comecei a usar."
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardTestimonial
          name="Ana Paula Oliveira"
          role="Empreendedora"
          photo="/profile-3.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardTestimonial
          name="Paula Souza"
          role="Especialista em Marketing"
          photo="/profile-4.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardTestimonial
          name="Henrique Lima"
          role="UX Writer"
          photo="/profile-5.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardTestimonial
          name="Eduardo Alves"
          role="Product Manager"
          photo="/profile-6.jpg"
          testimonial="Menos caos, mais controle. É isso que o Taskly trouxe para minha rotina."
        />
      </SwiperSlide>
    </Swiper>
  );
}