import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>PCDS Coding as Art Information</h1>
      <ul>
        <li>
          <a href="slides/first-days-caa1/index.html">
            First Days Slides - Coding as Art I
          </a>
        </li>
        <li>
          <a href="slides/first-days-caa2/index.html">
            First Days Slides - Coding as Art II
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <title>PCDS Coding as Art - Course Information</title>
);
