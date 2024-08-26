import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "   🦅",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-full h-[600px] border border-black ml-2 p-2 border bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        <div>
          {" "}
          {messages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Vishal Kamble", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
