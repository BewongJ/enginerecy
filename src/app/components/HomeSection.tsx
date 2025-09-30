const features = [
  {
    title: "Quality First",
    desc: "Every part passes multi-point checks and traceability standards before it reaches our shelves."
  },
  {
    title: "Fair & Circular",
    desc: "Monochrome branding, zero-waste mindset. We maximize reuse while minimizing environmental impact."
  },
  {
    title: "Fast Support",
    desc: "From quote to delivery, our team responds quickly with clear technical data and timelines."
  }
];

export default function HomeSection() {
  return (
    <section id="home" className="px-4">
      <div className="container mx-auto max-w-5xl space-y-8">
        <h2 className="text-3xl font-bold tracking-wide">Home</h2>
        <p className="text-gray-400">
          We turn engines and components into value again — inspected,
          refurbished, and responsibly repurposed. Here’s what makes us
          different.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3"
            >
              <h3 className="text-lg font-semibold tracking-wide">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
