import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brochure from "../brochure/brochure";
import Image from "next/image";

const LatestWork = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const blogData = [
    {
      label: "Cloud Mediqm",
      image: {
        src: "/images/blogOne.jpg",
        alt: "",
      },
      description: "Hospital Insurance Management",
      viewMoreLink: {
        label: "View Details",
        href: "#",
      },
    },
    {
      label: "Mobility",
      image: {
        src: "/images/blogTwo.jpg",
        alt: "",
      },
      description: "Hospital Insurance Management",
      viewMoreLink: {
        label: "View Details",
        href: "#",
      },
    },
    {
      label: "MediQM Platform",
      image: {
        src: "/images/blogThree.jpg",
        alt: "",
      },
      description: "Hospital Insurance Management",
      viewMoreLink: {
        label: "View Details",
        href: "#",
      },
    },
  ];
  return (
    <>
      <div className="w-full bg-white px-3 pb-7 rounded-xl">
        <h4 className="text-primary-green py-5 font-bold">Latest Work</h4>
        <Slider {...settings}>
          {blogData.map((blog, index) => {
            return (
              <div
                className=" bg-secondary-gray rounded-xl  flex flex-col"
                key={index}
              >
                <div className="rounded-t-xl relative  overflow-hidden shadow-lg">
                  <Image
                    className="w-full h-28 object-cover "
                    src={blog.image.src}
                    alt="Sunset in the mountains"
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-700 mb-7 font-bold overflow-ellipsis overflow-hidden">
                    {blog.description}
                  </p>
                  <Link
                    className="py-2 px-3  inline-block sm:px-3 lg:px-6 rounded-full border border-black"
                    href={blog.viewMoreLink.href}
                  >
                    {blog.viewMoreLink.label}
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div>
        <Brochure />
      </div>
    </>
  );
};

export default LatestWork;
