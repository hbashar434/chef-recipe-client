import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

const MyDocument = () => {
  return (
    <Document>
      <Page>
        <Text>
          - Question: What is the difference between controlled components and
          uncontrolled components in React? Answer: Controlled components are
          React components where the value of the form element (input, textarea,
          etc.) is controlled by React state, and any change to that value is
          propagated via callbacks. Uncontrolled components are components where
          the form element value is not controlled by React, but instead by the
          DOM itself, and is accessed via refs or other methods. - Question: How
          to validate React props using PropTypes? Answer: We can use PropTypes
          to validate the types of props that a component receives. PropTypes is
          a built-in feature in React that allows you to specify the expected
          types of each prop in the component's propTypes object. If a prop is
          of an incorrect type, React will generate a warning. - Question: What
          is the difference between Node.js and Express.js? Answer: Node.js is a
          runtime environment for executing JavaScript code outside of a web
          browser. Express.js is a web framework built on top of Node.js that
          simplifies the process of building web applications by providing a set
          of features and utilities, such as routing, middleware, and
          templating. - Question: What is a custom hook, and why will you create
          a custom hook? Answer: A custom hook is a reusable function that
          allows you to share stateful logic between components. Custom hooks
          are created by extracting common logic from components into a separate
          function that can be called from any component. This improves code
          maintainability and scalability, and reduces code duplication.
        </Text>
      </Page>
    </Document>
  );
};

export default MyDocument;
