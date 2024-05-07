function openNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("hidden");
}

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-black h-[12vh]  flex items-center justify-between z-50">
        <a href="http://www.meriise.org/" className="cursor-pointer ">
          <img
            src="\assets\meriise-logo.png"
            alt=""
            className="h-[7.5rem] mx-8 flex"
          />
        </a>
        <div className="space-y-2 mx-4 mt-4 lg:hidden" onClick={openNav}>
          <span
            className="block h-0.5 w-8  "
            style={{ backgroundColor: "#01adfc" }}
          ></span>
          <span
            className="block h-0.5 w-8  "
            style={{ backgroundColor: "#01adfc" }}
          ></span>
          <span
            className="block h-0.5 w-8  "
            style={{ backgroundColor: "#01adfc" }}
          ></span>
        </div>
      </div>
      <div
        className=" hidden fixed top-[12vh] right-0 lg:block lg:top-0 z-50"
        id="nav"
      >
        <ul
          className=" bg-black h-[100vh] w-[60vw] flex flex-col justify-center text-lg font-bold pl-8 lg:bg-transparent lg:flex-row lg:items-center lg:h-[12vh] lg:justify-evenly lg:w-[70vw] lg:mt-1 overflow-y-hidden"
          style={{ color: "#01adfc" }}
        >
          <li>
            <a href="http://www.meriise.org/" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a
              href="http://www.meriise.org/index.html"
              className="cursor-pointer"
            >
              Faculty
            </a>
          </li>
          <li>
            <a
              href="http://www.meriise.org/team.html"
              className="cursor-pointer"
            >
              Student Members
            </a>
          </li>
          <li>
            <a href="http://www.mcehassan.ac.in" className="cursor-pointer">
              Malnad College of Engineering
            </a>
          </li>
          <li>
            <a
              href="http://www.meriise.org/pragyatha23.html"
              className="cursor-pointer"
            >
              Pragyatha - 23
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
