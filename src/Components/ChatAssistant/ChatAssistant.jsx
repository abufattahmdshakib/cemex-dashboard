import React, { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import messagesicon from "../../../src/assets/messages-2.svg";

const ChatAssistant = () => {
    const [open, setOpen] = useState(false);

    const [showInfo, setShowInfo] = useState(false); // নতুন state

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello, Mr. Rahman. I’m your AI Assistant, ask me anything about this page. How can i help you today?",
        },
    ]);
    const [input, setInput] = useState("");

    const messagesEndRef = useRef(null); // scroll reference

    const aiReplies = [
        "Sure! Let’s explore that...",
        "I’m processing your request...",
        "Here’s what I found for you!",
        "Interesting question 🤔, here’s my take…",
        "Let’s dive in and find out!"
    ];

    const handleSend = () => {
        if (!input.trim()) return;
        const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
        setMessages([
            ...messages,
            { sender: "user", text: input },
            { sender: "ai", text: randomReply },
        ]);
        setInput("");
    };

    const handleClear = () => {
        setMessages([
            {
                sender: "ai",
                text: "Hello, Mr. Rahman. I’m your AI Assistant, ask me anything about this page. How can i help you today?",
            },
        ]);
    };

    // Auto-scroll effect
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div data-flash className="fixed bottom-5 right-5 z-50">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 text-[14px] font-[600] bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93] text-[#FFFFFF] px-4 py-3 rounded-[32px_5px_32px_5px] shadow-lg hover:scale-105 transition"

                >
                    <span><img src={messagesicon} alt="" /></span>
                    Chat with AI Assistant
                </button>
            )}

            {open && (
                <div className="w-[400px] h-[520px] bg-[#FFFFFF] border-[#DBE0E5] border-2 rounded-[12px] shadow-3xl flex flex-col overflow-hidden px-4">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b-2 border-[#DBE0E5]">
                        <div className="flex items-center gap-2">
                            <BsStars className="text-[20px] text-[#6A0DAD]" />
                            <h2 className="font-[700] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93]">
                                AI Assistant
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillQuestionCircle
                                className="text-[#757575] text-[18px] cursor-pointer"
                                onClick={() => setShowInfo(!showInfo)}
                            />

                            {/* Info text */}
                            {showInfo && (
                                <div className="absolute top-[80px] right-5  w-[350px] h-42 mx-auto bg-white border border-gray-300 p-3 rounded-lg shadow-lg text-center flex items-center text-sm text-gray-700">
                                    Feel free to ask anything about this page! Your AI Assistant is here to help you figure out any details, answer questions, and provide insights to support your business needs.
                                </div>
                            )}
                            <button
                                onClick={handleClear}
                                className="text-[16px] text-[#757575] flex items-center gap-1"
                            >
                                <span><MdOutlineRestartAlt className="text-[18px]" /></span>
                                Clear chat
                            </button>
                            <IoMdClose
                                className="cursor-pointer text-[#4c4c4c] text-lg ml-4"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                {msg.sender === "ai" && (
                                    <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93] flex items-center justify-center">
                                        <BsStars style={{ color: "#FFFFFF" }} size={16} />
                                    </div>
                                )}
                                <div
                                    className={`p-3 max-w-[75%] text-[12px] italic font-[500] rounded-[12px_12px_30px_12px] ${msg.sender === "user"
                                        ? "text-[#121417] rounded-[30px_12px_12px_12px]"
                                        : "text-[#121417]"
                                        }`}
                                    style={{
                                        background: msg.sender === "user"
                                            ? "#E0B0FF"
                                            : "linear-gradient(90deg, rgba(106, 13, 173, 0.10) 0%, rgba(255, 92, 147, 0.10) 100%)"
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions */}
                    {messages.length === 1 && (
                        <div className="space-y-2  mb-12 px-8">
                            {[
                                "What products are projected to be in high demand during the next quarter?",
                                "What are the seasonal trends for each product, and how can stock be adjusted accordingly?",
                                "What is the total revenue generated by each product this month?",
                            ].map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() =>
                                        setMessages([
                                            ...messages,
                                            { sender: "user", text: q },
                                            { sender: "ai", text: "Good question! Let me check..." },
                                        ])
                                    }
                                    className="w-full border-[#DBE0E5] text-center border px-3 py-2 rounded-[10px] text-[11px] text-[#121417] transition"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className="relative border-t border-gray-200 p-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Let the magic begin, Ask a question"
                            className="w-full px-3 py-2 pr-10 rounded-[8px] border border-[#DBE0E5] focus:outline-none text-[12px] text-[#757575]"
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6A0DAD] hover:text-[#FF5C93]"
                        >
                            <IoSend size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatAssistant;
