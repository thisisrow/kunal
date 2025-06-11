import React, { useState } from "react";
import { Button } from "../ui/button";

const SmileSol: React.FC = () => {
    const transformations = [

        {

            title: "Orthodontic Treatments",

            pic: "/sol1.png",

        },

        {

            title: "Dental Implants",

            pic: "/sol2.png",

        },

        {

            title: "Smile Designing",

            pic: "/sol3.png",

        },

        {

            title: "Full Mouth Rehabilitation",

            pic: "/sol4.png",

        },

        {

            title: "Smile Enhancement ",

            pic: "/sol5.png",

        },

        {

            title: " Restorative Dentistry",

            pic: "/sol6.png",

        }

    ];

    return (
        <section className="bg-[url(/rectangle-474.svg)] bg-cover bg-center py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-0 lg:mx-auto lg:max-w-4xl">
                <div className="relative">
                    <h2 className="text-3xl mt-[5%] md:text-4xl lg:text-5xl font-bold text-[#0578b1] text-center mb-12 lg:mb-10">
                        Dr. Kunal Shet’s Smile Solutions
                    </h2>
                    {/* Add lg:mx-auto and lg:px-XX for large screen margins */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {transformations.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4"
                            >
                                <img
                                    src={item.pic}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-center justify-start text-black/60 text-xl font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                {/* CTA Button */}
                <Button
                    onClick={() => {
                        window.open('https://wa.me/919981057175', '_blank')
                    }}
                    className="w-full lg:w-[372px] h-12 mt-8 mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5">
                    <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal mr-1">
                    Quick Connect via Video Call
                    </span>
                    <img className="w-[20px] h-[20px]" alt="Frame" src="/math.png" />
                </Button>
            </div>
        </section>
    );
};

export default SmileSol;