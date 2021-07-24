import React from "react";
import Button from "../../shared/component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarHorizontal = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="NavBarHorizontal flex justify-between mx-10 md:mx-14 xl:mx-32 2xl:mx-96 my-6 sticky ">
        <div className="text-2xl font-medium flex">
          <div className="text-colorSecondary">Stay</div>
          <div className="text-colorPrimary">cation.</div>
        </div>
        <nav className="sm:hidden">
          <button onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 top-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-screen bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <nav className="relative p-3 flex-auto text-colorPrimary font-medium text-lg">
                      <p className="my-4 text-blueGray-500 flex flex-col text-lg leading-relaxed">
                        <Button
                          className="hover:text-colorSecondary mb-3"
                          isLink
                          link="home"
                        >
                          Home
                        </Button>
                        <Button
                          className="hover:text-colorSecondary mb-3"
                          isLink
                          link="browseby"
                        >
                          Browse by
                        </Button>
                        <Button
                          className="hover:text-colorSecondary mb-3"
                          isLink
                          link="stories"
                        >
                          Stories
                        </Button>
                        <Button
                          className="hover:text-colorSecondary"
                          isLink
                          link="agents"
                        >
                          Agents
                        </Button>
                      </p>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className="opacity-25 fixed inset-0 z-40 bg-black"
                onClick={() => setShowModal(false)}
              ></div>
            </>
          ) : null}
        </nav>
        <nav className="hidden sm:text-colorPrimary sm:font-medium sm:text-lg sm:flex">
          <Button
            className="hover:text-colorSecondary mr-10"
            isLink
            link="home"
          >
            Home
          </Button>
          <Button
            className="hover:text-colorSecondary mr-10"
            isLink
            link="browseby"
          >
            Browse by
          </Button>
          <Button
            className="hover:text-colorSecondary mr-10"
            isLink
            link="stories"
          >
            Stories
          </Button>
          <Button className="hover:text-colorSecondary" isLink link="agents">
            Agents
          </Button>
        </nav>
      </div>
    </>
  );
};

export default NavBarHorizontal;
