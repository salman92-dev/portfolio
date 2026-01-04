const Contact = () => {
    return (
        <section id="contact" className="2xl:container mx-auto px-6 md:px-10 py-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-semibold syne text-black mb-6">
                    {`Let's`} Work Together
                </h2>
                <p className="text-lg md:text-xl text-black/70 mb-12">
                    {`I'm`} always excited to collaborate on new projects or discuss potential opportunities. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p>
                <a 
                    href="mailto:salman@example.com"
                    className="inline-block px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
}
export default Contact;