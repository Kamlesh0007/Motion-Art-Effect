import React from 'react';
import TestimonialImage1 from '../assets/motionarteffect-img1.png';
import TestimonialImage2 from '../assets/motionarteffect-img2.png';
import TestimonialImage3 from '../assets/motionarteffect-img3.png';
import rating from '../assets/motionarteffect-img4.png';

const testimonialData = [
    {
        id: 1,
        image: TestimonialImage2,
        score: '4.5',
        reviews: '12 Reviews'
      },
  {
    id: 2,
    image: TestimonialImage1,
    score: '4.5',
    reviews: '9 Reviews'
  },

  {
    id: 3,
    image: TestimonialImage3,
    score: '4.5',
    reviews: '15 Reviews'
  }
];

const Testimonials = () => {
  return (
    <section className=" py-12">
    <div className="container mx-auto">
      <h2 className="text-xl font-normal  font-outfit text-center text-testHead mb-8">Trusted by Thousands of Users Around the World</h2>
      <div className="flex flex-wrap justify-center md:max-xl:justify-center md:justify-between gap-8">
        {testimonialData.map(testimonial => (
          <div key={testimonial.id} className="flex items-center p-6  ">
            <div className="flex items-center">
              <img src={testimonial.image} alt="" className="w-24 h-24 rounded-full mr-4 bg-[#0D061F]" />

            </div>
            <div className="">
            <img src={rating} alt="" className="" />
            <div className=" text-starScoreColor mt-4 font-normal font-sora"><strong>{testimonial.score}</strong> Score, {testimonial.reviews}</div>
          </div>
            </div>
           
        ))}
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
