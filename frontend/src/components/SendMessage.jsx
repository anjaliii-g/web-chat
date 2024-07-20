import React, { useState } from "react";
const SendMessage = () => {
  const [value, setValue] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(value);
    if (value.trim === "") {
      alert("Enter valid message!");
      return;
    }
    setValue("");
  };
  return (
    <div className="bg-gray-200 fixed w-full py-10 shadow-lg bottom-0">
      <form onSubmit={handleSendMessage} className="container flex px-2">
        <input
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};
export default SendMessage;