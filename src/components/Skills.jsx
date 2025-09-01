

export default function Skills() {
    return (
        <>
        <section className='bg-[#0a0d12] h-[90vh]'>
            <div className="flex flex-column justify-center">
                <h2 className="text-center text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-3 mb-4 md:mb-6 mt-15 md:mt-20 lg:mt-20 bg-gradient-to-r from-sky-500 to-fuchsia-600 inline-block text-transparent bg-clip-text">
                    Technical Skills
                </h2>
            </div>
            {/* Header Underline */}
            <div  className='w-24 md:w-30 h-1 mx-auto rounded-sm mb-10 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-transparent'/>  

            <p className="text-center text-xl text-[#8998ad] dark:text-[#8998ad]">
                A comprehensive overview of the technologies and tools I use to bring ideas to life
            </p>
        </section>
        </>
    )
}