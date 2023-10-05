import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-left text-4xl font-bold">
                            <p>
                                I'm Shweta Mishra, <br></br>Full Stack Developer <br></br>on a mission to shape<br></br> the digital world through code.
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                I specialize in a diverse array of technologies,
                                from building robust back-end systems using
                                Spring Boot and NodeJs to crafting delightful user
                                interfaces with React.
                                My experience extends to
                                API development, database design, allowing me to deliver end-to-end
                                solutions that exceed expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;