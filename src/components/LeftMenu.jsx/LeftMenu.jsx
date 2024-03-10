import React from "react";
import Chats from "../icons/Chats";
import Calls from "../icons/Calls";
import Status from "../icons/Status";
import Star from "../icons/Star";
import Settings from "../icons/Settings";
import Profile from "../icons/Profile";
const LeftMenu = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block h-screen min-w-20">
        <div className="text-white flex flex-col h-screen justify-between items-center gap-5 py-10">
          <div className=" flex flex-col gap-2 cursor-pointer">
            <div className="">
              <Chats />
            </div>
            <div>
              <Calls />
            </div>
            <div>
              <Status />
            </div>
          </div>

          <div className="flex flex-col gap-2 cursor-pointer">
            <div>
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
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Settings />
            </div>
            <div>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
