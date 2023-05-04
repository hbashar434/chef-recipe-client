import React from "react";

const data = [
  {
    id: "12345678",
    question:
      "What is the difference between controlled components and uncontrolled components in React?",
    answer:
      "Controlled components are React components where the value of the form element (input, textarea, etc.) is controlled by React state, and any change to that value is propagated via callbacks. Uncontrolled components are components where the form element value is not controlled by React, but instead by the DOM itself, and is accessed via refs or other methods.",
  },
  {
    id: "23456789",
    question: "How to validate React props using PropTypes?",
    answer:
      "We can use PropTypes to validate the types of props that a component receives. PropTypes is a built-in feature in React that allows you to specify the expected types of each prop in the component's propTypes object. If a prop is of an incorrect type, React will generate a warning.",
  },
  {
    id: "34567890",
    question: "What is the difference between Node.js and Express.js?",
    answer:
      "Node.js is a runtime environment for executing JavaScript code outside of a web browser. Express.js is a web framework built on top of Node.js that simplifies the process of building web applications by providing a set of features and utilities, such as routing, middleware, and templating.",
  },
  {
    id: "45678901",
    question: "What is a custom hook, and why will you create a custom hook?",
    answer:
      "A custom hook is a reusable function that allows you to share stateful logic between components. Custom hooks are created by extracting common logic from components into a separate function that can be called from any component. This improves code maintainability and scalability, and reduces code duplication.",
  },
];

const Blog = () => {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-12 bg-base-200">
      <h1 className="font-bold text-4xl my-16 text-center">Blog</h1>
      {data.map((blog) => (
        <div
          tabIndex={0}
          className="collapse collapse-arrow group"
          key={blog.idx}
        >
          <div className="collapse-title text-black bg-orange-300 rounded-xl text-3xl group-focus:bg-orange-400 group-focus:text-secondary-content">
            {blog.question}
          </div>
          <div className="collapse-content mt-2 group-focus:mb-8 bg-orange-400 text-black text-lg group-focus:bg-orange-400 rounded-xl group-focus:text-black group-focus:p-6">
            {blog.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
