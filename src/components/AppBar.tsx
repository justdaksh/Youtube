import { InterestBar } from "./InterestBar";
import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <>
      <NavBar />
    </>
  );
}

function NavBar() {
  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <div className="flex cursor-pointer items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="flex cursor-pointer rounded-full ml-3">
            <span className="h-7 w-7 fill-[#ff0000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3z" />
                <path
                  className="fill-white"
                  d="M232.2 337.6V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </span>
            <div className="pl-1 items-center">Youtube</div>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex cursor-pointer hover:bg-gray-100 hover:bg-opacity-25 transition duration-300 rounded-full p-2 border border-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div className="pl-1">Sign In</div>
        </div>
      </div>
    </>
  );
}
