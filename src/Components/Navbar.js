import "./CSS/navbar.css";

function Navbar() {
  return (
    <div class="navContainer">
      <nav class="nav flex flex-wrap items-center justify-between px-9">
        <div class="navLogoText flex items-center py-3 text-grey-lightest">
          <span class="font-bold text-xl self-center">
            GENESIS <br />
            MEDIA
          </span>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul
          id="navList"
          class="menu border-b md:border-none font-normal flex mr-10 items-center justify-end list-reset m-0 w-full md:w-auto"
        >
          <li class="border-t md:border-none">
            <a
              href="#"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Services
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="#"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Team
            </a>
          </li>

          <li class="border-t md:border-none">
            <a
              href="#"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
