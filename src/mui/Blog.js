import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeature";
import FeaturedPost from "./FeaturedPost";
import { Card, Paper } from "@material-ui/core";
import result from "../img/result.png";
import vacancy from "../img/vacancy.png";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

export default function Blog() {
  return (
    <Card>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="text-uppercase text-muted font-weight-bold mb-1">
                <strong>Vacancy</strong>
              </h5>
              <div class="empty-img">
                <img src={vacancy} height="150" alt="Vacancy Image" />
              </div>
              <ul class="list-unstyled lh-lg">
                <li>
                  <p class="text-muted">
                    TTPL is pleased to announce new positions
                  </p>
                </li>
              </ul>
              <div class="text-center mt-4">
                <a
                  href="/erm/application"
                  class="btn btn-outline-primary w-100"
                >
                  View Vacancy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card card-md">
            <div class="card-body text-center">
              <h5 class="text-uppercase text-muted font-weight-bold mb-1">
                <strong>Result</strong>
              </h5>
              <div class="empty-img">
                <img src={result} height="150" alt="Result Image" />
              </div>
              <ul class="list-unstyled lh-lg">
                <li>
                  <p class="text-muted">
                    See the result for all the vacancy announced
                  </p>
                </li>
              </ul>
              <div class="text-center mt-4">
                <a
                  href="/erm/resultDetail"
                  class="btn btn-outline-primary w-100"
                >
                  View Result
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
      {/* <main className="col-md-4">
          
          <Grid container spacing={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        
      </main> */}

      {/* <React.Fragment> */}

      {/* <Container maxWidth="lg">
 
        <main>
          
            <Grid container spacing={2}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          
        </main>
      </Container> */}

      {/* </React.Fragment> */}
    </Card>
  );
}
