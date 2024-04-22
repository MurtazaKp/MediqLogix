import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogData = [
    {
      label: "Cloud Mediqm",
      image: {
        src: "/images/blogOne.jpg",
        alt: "",
      },
      description:
        "MediQlogix is a healthcare software company developing Cloud database products…",
      viewMoreLink: {
        label: "View More Details",
        href: "#",
      },
    },
    {
      label: "Mobility",
      image: {
        src: "/images/blogTwo.jpg",
        alt: "",
      },
      description:
        "MediQlogix is a healthcare software company developing Cloud database products…",
      viewMoreLink: {
        label: "View More Details",
        href: "#",
      },
    },
    {
      label: "MediQM Platform",
      image: {
        src: "/images/blogThree.jpg",
        alt: "",
      },
      description:
        "MediQlogix is a healthcare software company developing Cloud database products…",
      viewMoreLink: {
        label: "View More Details",
        href: "#",
      },
    },
  ];
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {blogData.map((blog, index) => {
        return (
          <div className="bg-white rounded-xl  flex flex-col" key={index}>
            <div className="rounded-t-xl relative  overflow-hidden shadow-lg">
              <img
                className="w-full h-52 object-cover "
                src={blog.image.src}
                alt="Sunset in the mountains"
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="w-full h-full absolute inset-0 z-40 bg-black opacity-50"></div>
              <p className="absolute z-50 top-3 left-5 text-white font-bold">
                {blog.label}
              </p>
            </div>
            <div className="flex-grow p-4">
              <p className="text-gray-700 mb-7 text-base font-bold overflow-ellipsis overflow-hidden">
                {blog.description}
              </p>
              <Link
                className="py-2 px-3 mb-2 inline-block sm:px-3 lg:px-6 rounded-full border border-black"
                href={blog.viewMoreLink.href}
              >
                {blog.viewMoreLink.label}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
