import FadeText2 from "./Fadetext2";
const Contact = () => {
    return (
        <section id="contact" className="2xl:container mx-auto px-6 md:px-10 py-12 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-semibold syne text-black mb-6">
                    {`Let's`} Work Together
                </h2>
                {/* <p className="text-lg md:text-xl funnel text-black/70 mb-12">
                    {`I'm`} always excited to collaborate on new projects or discuss potential opportunities. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p> */}
                <FadeText2 text="I'm always excited to collaborate on new projects or discuss potential opportunities. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!" 
                className="text-xl tracking-[1px] leading-[150%] md:text-2xl funnel text-black mb-12"
                />
                <a 
                    href="mailto:salman@example.com"
                    className="inline-block px-8 text-2xl syne py-5 bg-[#ddf160] text-black rounded-full font-medium transition-colors duration-300"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
}
export default Contact;