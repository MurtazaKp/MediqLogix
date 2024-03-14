import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogData = {
    heading: "Whats New?",
    blog: [
      {
        img: "",
        heading: "Why drinking coffee cuts diabetes risk",
        linK: {
          label: "SEE MORE",
          href: "#",
        },
      },
      {
        img: "",
        heading: "Why drinking coffee cuts diabetes risk",
        linK: {
          label: "SEE MORE",
          href: "#",
        },
      },
      {
        img: "",
        heading: "Why drinking coffee cuts diabetes risk",
        linK: {
          label: "SEE MORE",
          href: "#",
        },
      },
    ],
  };
  return (
    <div className="bg-black text-white py-14">
      <h2 className="text-center mb-8 text-2xl">{blogData.heading}</h2>
      <div className="grid grid-cols-3 gap-5 lg:px-36">
        {blogData.blog.map((blog, index) => {
          return (
            <div
              key={index}
              className="flex gap-6 border rounded-lg h-[120px]  items-stretch border-primary-green"
            >
              <div className="w-5/12 rounded-lg ">
                <img
                  className="w-full h-full rounded-s-lg"
                  src="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="flex flex-col w-9/12  justify-between py-3">
                <h4 className="mb-5">{blog.heading}</h4>
                <Link className="text-xs" href={blog.linK.href}>
                  {blog.linK.label}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
