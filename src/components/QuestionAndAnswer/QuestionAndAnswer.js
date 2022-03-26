import React from 'react';

const QuestionAndAnswer = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center font-bold">Question And Answer</h1>
      <div className="mx-10">
        <h1 className="text-2xl">
          <span className="text-gray-600">Question 1: </span>How does react
          work?
        </h1>
        <p className="text-lg">
          <span className="text-gray-600">Answer: </span>
          React abides by a virtual tree and creates a diff computation with the
          help of diff algorithm. It creates a tree structure just like an HTML
          structure. Then it creates a DOM. The HTML DOM modifies the interfaces
          on it. It contains different kind of JS method like getElementById,
          querySelector, querySelectorAll and others to target every node and
          modifies the code as HTML for us.
        </p>
      </div>

      <h1 className="text-4xl text-center font-bold">Question And Answer</h1>
      <div className="mx-10">
        <h1 className="text-2xl">
          <span className="text-gray-600">Question 2: </span>How does useState
          work?
        </h1>
        <p className="text-lg">
          <span className="text-gray-600">Answer: </span>
          useState is a Hook in react which takes a parameter as the states
          initial value. It returns two values in an array. The first one is the
          value of the state and the second paramter is a function which is used
          to modify the state value. We can run any kind of logic to change the
          value of the state according to our requirements with the second
          parameter of the useState. And after setting the second parameter, the
          state is set according to the logic of the second parameter function.
          This is how useState hook works.
        </p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
