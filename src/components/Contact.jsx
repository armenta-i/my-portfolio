import { Email, GitHub, LinkedIn, MailOutline, PersonPinCircle, PersonPinCircleOutlined, Phone, PhoneOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import '../index.css';

export default function Contact() {
    return (
        <>
            <section
            /* Contact Info header */
            style={{ background: "var(--gradient-accent)" }}
            className="h-full border-[0.1px] border-[#181926]"
            >

                <div className="justify-center">
                    <div className="flex flex-column justify-center">
                        <h2 
                            className="text-center text-3xl md:text-7xl lg:text-7xl xl:text-7xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                            id="contact"
                        >
                            Get In Contact
                        </h2>
                    </div>
                    {/* Header Underline */}
                    <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  
                    <p className="text-center text-balance text-xl md:text-4xl lg:text-3xl text-[#8998ad] dark:text-[#8998ad] mb-10 lg:mb-15 mx-6 lg:mx-0">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                    </p>
                </div>

                {/* Main Info */}
                <div className="md:flex px-4 md:px-40 md:gap-10 xl:px-50 mb-20">
                    {/* Person Info */}
                    <div className="">
                        <h2 className="text-3xl md:text-4xl mb-5 text-wrap text-[#42a5f5]">
                            Let's Connect
                        </h2>
                        <p className="md:text-xl">
                            Whether you have a project in mind, want to collaborate, or just want 
                            to say hello, I'd love to hear from you. Feel free to reach out through 
                            any of the channels below.
                        </p>

                        {/* Email card */}

                        <div 
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className="flex items-center gap-4 px-7 py-5 rounded-xl my-5 box-general-shadow"
                        >
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 rounded-md w-fit">
                                <MailOutline
                                    sx={{
                                        backgroundColor: ""
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                    
                                    />
                            </div>
                            <div className="">
                                <h2>Email</h2>
                                <p className="text-[#8998ad]">
                                    i_armenta@outlook.com
                                </p>
                            </div>
                        </div>
                        {/* Phone card */}
                        <div 
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className="flex items-center gap-4 px-7 py-5 rounded-xl my-5 box-general-shadow"
                        >   
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 rounded-md">
                                <PhoneOutlined
                                    sx={{
                                        backgroundColor: ""
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                    
                                    />
                            </div>
                            <div className="">
                                <h2>Phone</h2>
                                <p className="text-[#8998ad]">
                                    +1 (575) 915 5602
                                </p>
                            </div>
                        </div>
                        {/* Location card */}
                        <div 
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className="flex items-center gap-4 px-7 py-5 rounded-xl my-5 box-general-shadow"
                        >
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 rounded-md">
                                <PersonPinCircleOutlined
                                    sx={{
                                        backgroundColor: ""
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                    
                                    />
                            </div>
                            <div className="">
                                <h2>Location</h2>
                                <p className="text-[#8998ad]">
                                    El Paso, Texas
                                </p>
                            </div>
                        </div>

                        {/* Social Media Buttons */}
                        <div className="flex gap-7 mb-10">
                        {/* Github Button */}
                            <Button
                                sx={{
                                    textTransform: "none",
                                }}
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<GitHub />}
                                className="bg-[#181a1b] hover:bg-gradient-to-br hover:from-blue-700/20 hover:to-blue-700/20 border-1 border-[#42a5f5]"
                                >
                                GitHub
                            </Button>
                            {/* LinkedIn Button */}
                            <Button
                                sx={{
                                    textTransform: "none"
                                }}
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<LinkedIn />}
                                className="bg-[#181a1b] hover:bg-gradient-to-br hover:from-blue-700/20 hover:to-blue-700/20 border-1 border-[#42a5f5]"
                                >
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                    {/* Form */}
                    <div
                        style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                        className="grow-1 rounded-lg w-full h-fit"
                    >       
                        <h2 className="text-2xl md:text-4xl mb-5 text-wrap text-[#42a5f5] px-10 pt-5 pb-1">
                            Send a Message
                        </h2>

                        <form>

                            {/* <!-- To simplify the tutorial, the value is static. --> */}
                            <div className="px-10">
                            <input type="hidden" name="time" value="Mar 10 2025 08:46"/>
                            <div className="md:flex">
                                <div>
                                {/* Name */}
                                <label className="text-md">
                                    Name
                                </label><br/>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required
                                    className="bg-black my-2 mx-1 w-full rounded-lg py-1 px-3"
                                    />
                                </div>
                            <div className="flex flex-col">
                            {/* Email */}
                            <label className="text-md text-white">
                                Email
                            </label><br/>
                            </div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required
                                    className="bg-black my-2 mx-1 w-full rounded-lg py-1 px-3"
                                    />
                            </div>
                            {/* Subject */}
                            <label className="text-md">
                                Subject
                            </label><br/>
                                <input
                                    type="text"
                                    name="subject" 
                                    required
                                    className="bg-gray-900 mx-1 w-full rounded-lg py-1 px-3"
                                />                            
                                {/* Message */}
                            <label>Message</label><br/>
                            <textarea 
                                name="message" 
                                required
                                className="bg-(--gradient-accent-flipped) my-2 mx-1 w-full h-30 rounded-lg md:rounded-bl-none py-1 px-3 resize-none"
                                // background: "var(--gradient-accent)"
                            >
                            </textarea>
                            {/* Submit Button */}
                            <Button
                                sx={{
                                    textTransform: "none",
                                }}
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                // startIcon={<GitHub />}
                                className="bg-[#181a1b] hover:bg-gradient-to-br hover:from-blue-700/20 hover:to-blue-700/20 border-1 border-[#42a5f5] w-full"
                                >
                            <input type="submit" value={"Submit Message"} className="py-2"/>
                            </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}