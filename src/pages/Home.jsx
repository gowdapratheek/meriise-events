import Header from "/src/components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className="mt-[20vh]">
        <div className="[&_*]: text-[#01adfc] [&_*]:bg-black [&_*]:w-[40vh] [&_*]:h-[10vh] [&_*]:rounded-2xl flex flex-col justify-center items-center    lg:grid lg:grid-cols-2 lg:gap-4 lg:[&_*]:place-self-center">
          {/* <div className="my-5">
            <p>
              <Link
                to="/"
                className="text-3xl flex justify-center items-center"
              >
                2023
              </Link>
            </p>
          </div> */}

          <div className="my-5">
            <p>
              <Link
                to="/events24"
                className="text-3xl flex justify-center items-center"
              >
                2024
              </Link>
            </p>
          </div>

          <div className="my-5">
            <p>
              <Link
                to="/events23"
                className="text-3xl flex justify-center items-center"
              >
                2023
              </Link>
            </p>
          </div>

          <div className="my-5">
            <p>
              <Link
                to="/events22"
                className="text-3xl flex justify-center items-center"
              >
                2022
              </Link>
            </p>
          </div>

          <div className="my-5">
            <p>
              <Link
                to="/events21"
                className="text-3xl flex justify-center items-center"
              >
                2021
              </Link>
            </p>
          </div>

          <div className="my-5">
            <p>
              <Link
                to="/events20"
                className="text-3xl flex justify-center items-center"
              >
                2020
              </Link>
            </p>
          </div>
           <div className="my-5">
            <p>
              <Link
                to="/events19"
                className="text-3xl flex justify-center items-center"
              >
                2019
              </Link>
            </p>
          </div>

          <div className="my-5">
            <p>
              <Link
                to="/events18"
                className="text-3xl flex justify-center items-center"
              >
                2018
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
