/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/sample1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Youtube Clone",
    description:
      "Created a React based Youutbe clone with features like topic specific search, watch, like, dislike, comment, and subscribe. Used YouTube API to fetch data.",
    url: "https://github.com/vaishnavi192/Youtubeuff",
  },
  {
    title: "Hacknitt",
    description:
      "Created a website to improve coding culture in college, It uses leetcode, codeforces, codechef api to fetch data and display it in a single dashboard of NITT students.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Transfinitte",
    description:
      "Created a website for conducting college levl hackathon consisting of more than 500+ participants.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Startup Internship Portal",
    description:
      "Created a website for college students to apply for internships in alumni based startups and companies.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
