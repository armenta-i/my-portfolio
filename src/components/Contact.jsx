import { Email, GitHub, LinkedIn, MailOutline, PersonPinCircle, PersonPinCircleOutlined, Phone, PhoneOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import '../index.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const submitMessage = (e) => {
        e.preventDefault();
        
            // Debug: Log all form data
        const formData = new FormData(e.target);
        console.log('Form data being sent:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: "${value}"`);
        }

        emailjs.sendForm(
            import.meta.env.VITE_GMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then(() => {
            alert("message sent");
        })
        .catch((error) => {
            alert("error sending message");
            console.error(error)
        })
    }

    return (
        <>
            <section
            /* Contact Info header */
            style={{ background: "var(--gradient-accent)" }}
            className="h-full border-[0.1px] border-[#181926]"
            id="contact"
            >

                <div className="justify-center">
                    <div className="flex flex-column justify-center">
                        <h2 
                            className="text-center text-3xl md:text-5xl xl:text-6xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text"
                        >
                            Get In Contact
                        </h2>
                    </div>
                    {/* Header Underline */}
                    <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  
                    <p className="text-center text-balance text-xl md:text-2xl lg:text-3xl text-[#8998ad] dark:text-[#8998ad] mb-10 lg:mb-15 mx-6 lg:mx-0">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                    </p>
                </div>

                {/* Main Info */}
                <div className="md:flex px-4 lg:px-20 md:gap-10 xl:px-50 mb-20">
                    {/* Person Info */}
                    <div className="md:flex flex-col flex-1">
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
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 md:p-4 rounded-md md:rounded-lg w-fit">
                                <MailOutline
                                    sx={{
                                        backgroundColor: "",
                                        fontSize: { xs: 24, md: 32 } // This makes the icon bigger at md breakpoint
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                    
                                    />
                            </div>
                            <div className="">
                                <h2 className="md:text-xl">Email</h2>
                                <p className="text-[#8998ad] md:text-lg">
                                    i_armenta@outlook.com
                                </p>
                            </div>
                        </div>
                        {/* Phone card */}
                        <div 
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className="flex items-center gap-4 px-7 py-5 rounded-xl mb-5 box-general-shadow"
                        >   
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 md:p-4 rounded-md md:rounded-lg">
                                <PhoneOutlined
                                    sx={{
                                        backgroundColor: "",
                                        fontSize: { xs: 24, md: 32 } // This makes the icon bigger at md breakpoint
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                />
                            </div>
                            <div className="">
                                <h2 className="md:text-xl">
                                    Phone
                                </h2>
                                <p className="text-[#8998ad] md:text-lg">
                                    +1 (575) 915 5602
                                </p>
                            </div>
                        </div>
                        {/* Location card */}
                        <div 
                            style={{ background: "var(--gradient-accent)", borderImage: "var(--gradient-accent-flipped)" }} 
                            className="flex items-center gap-4 px-7 py-5 rounded-xl mb-5 box-general-shadow"
                        >
                            <div className="bg-gradient-to-br from-blue-700/20 to-blue-700/20 p-2 md:p-4 rounded-md md:round-lg">
                                <PersonPinCircleOutlined
                                    sx={{
                                        backgroundColor: "",
                                        fontSize: { xs: 24, md: 32 } // This makes the icon bigger at md breakpoint
                                    }}
                                    color=""
                                    className="text-[#42a5f5]"
                                    
                                    />
                            </div>
                            <div className="">
                                <h2 className="md:text-xl">Location</h2>
                                <p className="text-[#8998ad] md:text-lg">
                                    El Paso, Texas
                                </p>
                            </div>
                        </div>

                        {/* Social Media Buttons */}
                        <div className="flex gap-7 mb-10 lg:mt-10">
                        {/* Github Button */}
                            <Button
                                sx={{
                                textTransform: "none",
                                fontSize: {
                                    xs: "14px", // default before md
                                    md: "16px", // bigger after md
                                },
                                "& .MuiButton-startIcon": {
                                    "& svg": {
                                    fontSize: {
                                        xs: "18px", // default icon size
                                        md: "22px", // bigger icon after md
                                    },
                                    },
                                },
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
                                    textTransform: "none",
                                    fontSize: {
                                        xs: "14px", // default before md
                                        md: "16px", // bigger after md
                                    },
                                    "& .MuiButton-startIcon": {
                                        "& svg": {
                                        fontSize: {
                                            xs: "18px", // default icon size
                                            md: "22px", // bigger icon after md
                                        },
                                        },
                                    },
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
                        className="grow-1 rounded-lg w-full h-full flex flex-col flex-1"
                    >       
                        <h2 className="text-2xl md:text-3xl mb-5 text-wrap text-[#42a5f5] px-10 pt-5 pb-1">
                            Send a Message
                        </h2>

                        <form onSubmit={submitMessage}>

                            {/* <!-- To simplify the tutorial, the value is static. --> */}
                            <div className="px-10 mb-10">
                            <input type="hidden" name="time" value="Mar 10 2025 08:46"/>
                            <div className="md:pb-5 lg:pb-0">
                                <div>
                                {/* Name */}
                                <label className="text-md md:text-xl">
                                    Name
                                </label><br/>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required
                                    className="bg-gray-900 my-2 mx-1 w-full rounded-lg py-1 px-3 md:py-3"
                                    placeholder="Your name"
                                    />
                                </div>
                            <div className="">
                            {/* Email */}
                            <label className="text-md md:text-xl">
                                Email
                            </label><br/>
                            </div>
                            <div></div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required
                                    className="bg-gray-900 my-2 mx-1 w-full rounded-lg py-1 px-3 md:py-3"
                                    placeholder="your.email@example.com"
                                    />
                            {/* Subject */}
                            <div className="">
                                <label className="text-md md:text-xl">
                                Subject
                                </label>
                            </div>
                                <input
                                    type="text"
                                    name="subject" 
                                    required
                                    className="bg-gray-900 my-2 mx-1 w-full rounded-lg py-1 px-3 md:py-3"
                                    placeholder="What's this about?"
                                    />                            
                                {/* Message */}
                            <label className="text-md md:text-xl">
                                Message
                            </label><br/>
                            <textarea 
                                name="message" 
                                required
                                className="bg-gray-900 my-2 mx-1 w-full h-30 rounded-lg py-1 px-3 resize-none xl:mb-7 md:py-3"
                                // background: "var(--gradient-accent)"
                                placeholder="Tell me about your project, ideas or just say hello"
                                >
                            </textarea>
                            {/* Submit Button */}
                            </div>
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