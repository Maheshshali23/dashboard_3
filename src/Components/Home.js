import React from "react";


const Home = () => {
      
  return (
    <div className="container mx-auto px-40 py-5 ">
      <div className="text-2xl font-semibold flex-1 h-screen">
        <div>
          <nav className="text-sm leading-none flex items-center">
            <ol className="flex items-center">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Assert Admin
                </a>
              </li>
              <li className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Manage Category
                </a>
              </li>
            </ol>
            <button
              type="button"
              className="text-white bg-[#7e22ce] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-sm rounded-lg text-sm px-5 py-2.5 text-center float-right inline-flex items-center dark:focus:ring-[#3b5998]/55 ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Category
            </button>
          </nav>
          <div className="mx-auto my-1">
            <div className="mt-1 mr-40">
        <span class="bg-gray-100   text-gray-500 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300 ">Finance</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Electronics</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Content writing</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Media & Communication</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Software services</span>
            </div>
            <div className="mt-4">
        <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Human Resources</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Marketing</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Construction</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Teaching</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Business Development</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Soft Skills</span>
            </div>
         <div className="mt-4">
         <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Management</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Entrepreneurship</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Miscellaneous</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Custom</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Creative Design</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Applications</span>
         </div>
          <br/>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-5 py-3 rounded-full dark:bg-gray-400 dark:text-gray-300">Business operations</span>
            </div>
          <div className="flex items-center mt-4">
            <div className="mr-auto">
              <p className="text-[#7e22ce] text-sm">
                Certification Under the Category
              </p>
            </div>
            <div className="flex items-center ml-auto">
              <div className="relative flex items-center justify-end">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-2 border-l-gray-50 border border-gray-300"
                  placeholder="Search certificate"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 text-sm font-medium text-white bg-blue rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center">
            <div class="relative max-w-sm p-6 m-4 bg-gray-200 rounded-lg">
              <h5 class="absolute top-2 left-2 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                Finance
              </h5>
              <span class="absolute top-4 right-8 text-gray-500 text-sm">
                Know More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-3 absolute top-5 right-2 text-gray-500 text-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              <div className="mt-4">
                <label className="text-blue font-bold">
                  Accounts Finance{" "}
                  <span className="text-green font-bold">7</span>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="text-white w-60  bg-gradient-to-r from-green via-green to-green hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Tag a job
                </button>
              </div>
              <div>
              <button type="button" class="flex w-60  items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-blue dark:hover:text-white dark:hover:bg-blue dark:focus:ring-blue">
                <span class="mr-1">Employees Enrolled</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>

              </div>
              <div>
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Assign Certificate
                </button>
              </div>
            </div>

            <div class="relative max-w-sm p-6 m-4 bg-gray-200 rounded-lg">
              <h5 class="absolute top-2 left-2 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                Finance
              </h5>
              <span class="absolute top-4 right-8 text-gray-500 text-sm">
                Know More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-3 absolute top-5 right-2 text-gray-500 text-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              <div className="mt-4">
                <label className="text-blue font-bold">
                  Taxation Finance{" "}
                  <span className="text-green font-bold">4</span>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="text-white w-60  bg-gradient-to-r from-green via-green to-green hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Tag a job
                </button>
              </div>
              <div>
              <button type="button" class="flex w-60  items-center text-blue hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-blue dark:hover:text-white dark:hover:bg-blue dark:focus:ring-blue">
                <span class="mr-1">Employees Enrolled</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>

              </div>
              <div>
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Assign Certificate
                </button>
              </div>
            </div>

            <div class="relative max-w-sm p-6 m-4 bg-gray-200 rounded-lg">
              <h5 class="absolute top-2 left-2 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                Finance
              </h5>
              <span class="absolute top-4 right-8 text-gray-500 text-sm">
                Know More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-3 absolute top-5 right-2 text-gray-500 text-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              <div className="mt-4">
                <label className="text-blue font-bold">
                  Finance{" "}
                  <span className="text-green font-bold">5</span>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="text-white w-60  bg-gradient-to-r from-green via-green to-green hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Tag a job
                </button>
              </div>
              <div>
              <button type="button" class="flex w-60  items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-blue dark:hover:text-white dark:hover:bg-blue dark:focus:ring-blue">
                <span class="mr-1">Employees Enrolled</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>

              </div>
              <div>
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Assign Certificate
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ml-28">
          <div class="relative max-w-sm p-6 m-4 bg-gray-200 rounded-lg">
              <h5 class="absolute top-2 left-2 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                Finance
              </h5>
              <span class="absolute top-4 right-8 text-gray-500 text-sm">
                Know More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-3 absolute top-5 right-2 text-gray-500 text-sm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              <div className="mt-4">
                <label className="text-blue font-bold">
                  Financial Market <br/> Analyst{" "}
                  <span className="text-green font-bold right-5">0</span>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="text-white w-60  bg-gradient-to-r from-green via-green to-green hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Tag a job
                </button>
              </div>
              <div>
              <button type="button" class="flex w-60  items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-blue dark:hover:text-white dark:hover:bg-blue dark:focus:ring-blue">
                <span class="mr-1">Employees Enrolled</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>

              </div>
              <div >
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Assign Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <nav aria-label="Page navigation example" className="fixed bottom-10 right-40">
        <ul className="inline-flex -space-x-px">
            <li className="mr-1">
            <a href="#" className="px-3 py-2 leading-tight  text-white hover:text-blue border bg-blue border-blue hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-white dark:hover:text-blue dark:hover:bg-white dark:focus:ring-blue ">1</a>
            </li>
            <li className="mr-3">
            <a href="#" className="px-3 py-2 leading-tight  text-white hover:text-blue border bg-blue border-blue hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-white dark:hover:text-blue dark:hover:bg-white dark:focus:ring-blue">2</a>
            </li>
            <li className="mr-3">
            <a href="#" aria-current="page" className="px-3 py-2 leading-tight  text-white hover:text-blue border bg-blue border-blue hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-white dark:hover:text-blue dark:hover:bg-white dark:focus:ring-blue">3</a>
            </li>
            <li className="mr-3">
            <a href="#" className="px-3 py-2 leading-tight  text-white hover:text-blue border bg-blue border-blue hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-white dark:hover:text-blue dark:hover:bg-white dark:focus:ring-blue">4</a>
            </li>
            <li>
            <a href="#" className="px-3 py-2 leading-tight  text-white hover:text-blue border bg-blue border-blue hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue dark:text-white dark:hover:text-blue dark:hover:bg-white dark:focus:ring-blue">5</a>
            </li>
        </ul>
        </nav>
    </div>
  );
};

export default Home;
