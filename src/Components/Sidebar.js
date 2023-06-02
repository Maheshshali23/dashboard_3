import React, {useState} from 'react';
import { FaWaveSquare, FaUserPlus, FaShieldAlt, FaBuilding, FaUserCircle, FaProjectDiagram,FaBriefcase, FaGraduationCap, FaUsers,FaCartArrowDown, FaFileAlt } from 'react-icons/fa';


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Manage Categories", icon: FaWaveSquare },
        { title: "Add Company", icon: FaUserPlus },
        { title: "Add new user", icon: FaUserPlus },
        { title: "Add new certificate", icon: FaShieldAlt },
        { title: "University Actions", icon: FaBuilding },
        { title: "Add Student", icon: FaUserCircle },
        { title: "Add MCQ Questions", icon: FaProjectDiagram },
        { title: "AddRecuriter and Job", icon: FaBriefcase },
        { title: "Universities", icon: FaGraduationCap },
        { title: "View All Users", icon: FaUsers },
        { title: "Trial Version", icon: FaCartArrowDown },
        { title: "Add Blog", icon: FaFileAlt },
    ];
  
    const toggleSidebar = () => {
      setOpen(!open);
    };
  
    return (
      <div className="h-screen flex items-end justify-end">
        <button
          className="fixed lg:hidden z-90 bottom-10 right-8 bg-dark-gray w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
          onClick={toggleSidebar}
        >
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 m-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </span>
        </button>
        <div
          className={`${
            open ? "w-48 px-2 " : "w-0 "
          } lg:w-72 bg-dark-gray h-screen relative duration-500`}
        >
          <div className="justify-center mt-3">
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <div className="overflow-y-auto overflow-x-hidden flex-grow flex flex-row justify-center text-blue font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <h4>Admin Panel</h4>
              </div>
              <div className="overflow-y-auto overflow-x-hidden flex-grow flex flex-row justify-center text-blue font-bold">
                <ul className="pt-6">
                  {Menus.map((menu, index) => (
                    <li
                      key={index}
                      className="text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-blue hover:bg-white rounded-lg"
                    >
                      <menu.icon className="w-6 h-6" />
                        
                      <span>{menu.title}</span>
                    </li>
                  ))}
                  <li>
                    <div className="flex -space-x-1 overflow-hidden mt-10">
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        alt=""
                      />
                      <div className="px-4">
                        <p className="text-white font-bold">Anil J</p>
                        <span className="text-sm text-white">Assertion</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Sidebar;