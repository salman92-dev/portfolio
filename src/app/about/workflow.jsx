const Workflow = () => {
    return (
        <section className="py-20 container mx-auto px-6 max-w-6xl">
            <h2 className="syne text-3xl md:text-4xl mb-12 text-black">My Workflow</h2>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                "Understand requirements",
                "Analyze Figma design",
                "Build & optimize UI",
                "Test & deploy"
                ].map((step, i) => (
                <div key={i} className="p-6 border rounded-xl">
                    <span className="text-sm text-gray-500">Step {i + 1}</span>
                    <h3 className="mt-2 font-semibold text-lg">{step}</h3>
                </div>
                ))}
            </div>
        </section>
    )
}
export default Workflow;