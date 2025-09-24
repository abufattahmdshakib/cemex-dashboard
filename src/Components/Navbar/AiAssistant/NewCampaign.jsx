import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import imageone from "../../../../src/assets/gro-image.svg";
import imagetwo from "../../../../src/assets/groo-image-two.svg";

const campaigns = [
    {
        id: 1,
        point: "$199",
        title: "Growth Marketing Strategy",
        subtitle:
            "How to grow your business beyond traditional marketing tactics,",
        button: "Explore Now",
        image: imageone,
    },
    {
        id: 2,
        point: "$299",
        title: "Marketing Strategy",
        subtitle:
            "A comprehensive guide to building, positioning, and promoting your brand,",
        button: "Explore Now",
        image: imagetwo,
    },
];

const NewCampaign = () => {
    return (
        <div className="my-10">
            <h1 className="text-[#1D3557] text-[22px] font-[700] mb-6">
                New campaign ideas
            </h1>

            <div className="space-y-8">
                {campaigns.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col-2 items-center justify-between gap-6"
                    >
                        {/* Left Side */}
                        <div className="flex-1">
                            <span className="text-[#757575] font-[500] text-[12px]">
                                {item.point}
                            </span>
                            <h2 className="text-[#121417] text-[16px]  font-[600] mt-1">
                                {item.title}
                            </h2>
                            <p className="text-[#757575] text-[12px] font-[500] mt-1">{item.subtitle}</p>

                            <button className="mt-7 px-5 py-3 rounded-[8px] bg-[#F0F2F5] inline-flex items-center gap-3 text-[#121417] font-[500] text-[12px]">
                                {item.button}
                                <BsArrowUpRight size={18} />
                            </button>
                        </div>

                        {/* Right Side (Image) */}
                        <div className=" flex justify-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[250px] md:w-[300px] object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCampaign;
