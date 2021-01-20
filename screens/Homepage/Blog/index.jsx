import React from "react";
import { BlogStyles } from "./styles";
import { blogList } from "./data";
import BlogCard from "../../../components/Cards/BlogCard";
import { generateID } from "../../../lib/helpers";

const Blog = () => {
  return (
    <BlogStyles>
      <header>
        <h2 className="title">Blog</h2>
      </header>

      <section className="blog_gallery">
        {blogList.map((item) => (
          <BlogCard key={generateID(12)} {...item} />
        ))}
      </section>
    </BlogStyles>
  );
};

export default Blog;
