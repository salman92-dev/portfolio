const Values = () =>{
    return (
        <section className="py-20 bg-gray-50 rounded-3xl">
            <h2 className="syne text-3xl md:text-4xl mb-10">What I Value</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6">
                <h3 className="font-semibold text-xl">Clean Code</h3>
                <p className="mt-2 text-gray-600">
                    Readable, scalable, and maintainable codebases.
                </p>
                </div>
                <div className="p-6">
                <h3 className="font-semibold text-xl">Communication</h3>
                <p className="mt-2 text-gray-600">
                    Clear updates and transparency at every step.
                </p>
                </div>
                <div className="p-6">
                <h3 className="font-semibold text-xl">User Experience</h3>
                <p className="mt-2 text-gray-600">
                    Interfaces that feel intuitive and smooth.
                </p>
                </div>
            </div>
        </section>
    )
}
export default Values;