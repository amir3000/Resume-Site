import React from "react";
import axios from "axios";
import BlogForm from "./BlogForm";
import {
  ArticleContainer,
  ArticleImage,
  ArticleWrapper,
  BlogWrapper,
  SectionContainer,
} from "./BlogElements";

const apiUrl = "http://localhost:3000/posts";

const Blog = () => {
  return (
    <>
      <BlogForm />
      <SectionContainer>
        <BlogWrapper>
          {/* single Article */}
          <ArticleContainer>
            <ArticleWrapper>
              <ArticleImage />
              <ArticleTitle />
              <ArticleDescribe>
                
              </ArticleDescribe>
            </ArticleWrapper>
          </ArticleContainer>
        </BlogWrapper>
      </SectionContainer>
    </>
  );
};

export default Blog;
