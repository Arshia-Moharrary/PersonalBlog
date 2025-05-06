export default function Hero() {
    return (
        <section className="relative text-gray-800 py-24">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-url.com')" }}>
            </div>
            <div className="relative max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl text-[var(--primary-color)] sm:text-5xl font-extrabold mb-4">
                    Welcome to My Personal Blog
                </h1>
                <p className="text-lg sm:text-xl mb-6 leading-8">
                    A space where I share my thoughts, experiences, and more.<br /> Join me on this journey!
                </p>
                <a href="#latest-posts" className="btn-primary">
                    Read Latest Posts
                </a>
            </div>
        </section>
    )
}