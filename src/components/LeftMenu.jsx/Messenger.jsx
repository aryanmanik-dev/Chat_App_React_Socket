import React from "react";
import MessageRow from "./MessageRow";

const Messenger = () => {
  return (
    <div className="px-10 md:min-w-[80%] mx-auto scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin overflow-y-scroll">
      <div className="flex justify-between py-5">
        <div>
          <h2 className="text-white text-xl">Chats</h2>
        </div>
        <div className="flex gap-5">
          <span>
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
          </span>

          <span>
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
    </div>
  );
};

export default Messenger;