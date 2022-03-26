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

      <div className="mx-10">
        <h1 className="text-2xl">
          <span className="text-gray-600">Question 3: </span>Difference between
          props and state?
        </h1>
        <p className="text-lg mb-6">
          <span className="text-gray-600">Answer: </span>
          <div className="flex flex-col justify-center h-full">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Serial</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Props</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">State</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              1
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">Props are read-only.</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            State changes are asynchronous.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              2
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">Props are immutable.</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">State are mutable.</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              3
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            Props can make components reusable.
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            State can not make components reusable.
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
