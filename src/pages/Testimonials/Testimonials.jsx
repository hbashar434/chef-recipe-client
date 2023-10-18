import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonialsData = [
  {
    id: 1,
    text: "This website is a fantastic resource for food lovers. The recipes are easy to follow and always yield delicious results.",
    author: "John Doe",
    authorImage: "https://i.ibb.co/qB28DtJ/person-7.jpg",
    bgColor: "bg-blue-100",
    ratings: "4.5",
  },
  {
    id: 2,
    text: "I've tried many cooking websites, but this one stands out. The recipes are top-notch, and the step-by-step instructions make it a breeze.",
    author: "John Smith",
    authorImage: "https://i.ibb.co/z62H9G7/person-4.jpg",
    bgColor: "bg-green-100",
    ratings: "4.7",
  },
  {
    id: 3,
    text: "The variety of recipes available here is impressive. I've made several dishes, and they've all been a hit with my family.",
    author: "Alison Johnson",
    authorImage: "https://i.ibb.co/ZhBKXg0/person-9.jpg",
    bgColor: "bg-yellow-100",
    ratings: "4.0",
  },
  {
    id: 4,
    text: "I can't express how much I appreciate this website. It has expanded my culinary skills, and the results are always mouthwatering.",
    author: "Robert Wilson",
    authorImage: "https://i.ibb.co/0sWFQCn/person-3.jpg",
    bgColor: "bg-red-100",
    ratings: "4.2",
  },
  {
    id: 5,
    text: "This site is my go-to for culinary inspiration. The recipes are consistently excellent, and I've learned a lot from the cooking tips.",
    author: "Thomas Adams",
    authorImage: "https://i.ibb.co/W3G35vG/person-2.jpg",
    bgColor: "bg-purple-100",
    ratings: "4.9",
  },
  {
    id: 6,
    text: "The step-by-step instructions are a game-changer for someone like me who's not a seasoned cook. Kudos to the team behind this website!",
    author: "Emil Brown",
    authorImage: "https://i.ibb.co/whkDhQx/person-8.jpg",
    bgColor: "bg-indigo-100",
    ratings: "5.0",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="my-title text-amber-500">
          User Testimonials and Reviews
        </h2>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 ${testimonial.bgColor}`}
            >
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={testimonial.authorImage}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">
                    {testimonial.ratings}
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
