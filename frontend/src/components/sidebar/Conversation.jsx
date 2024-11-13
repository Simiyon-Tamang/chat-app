import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-m">❤️</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
