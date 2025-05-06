export default function Home() {
    return (
        <div>
            <section className="relative text-gray-800 py-24">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-url.com')" }}>
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Welcome to My Personal Blog
                    </h1>
                    <p className="text-lg sm:text-xl mb-6 leading-8">
                        A space where I share my thoughts, experiences, and more.<br /> Join me on this journey!
                    </p>
                    <a href="#latest-posts" className="bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 text-lg transition">
                        Read Latest Posts
                    </a>
                </div>
            </section>

            <section id="latest-posts" className="bg-white text-gray-800 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">Latest Posts</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Post Title One</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                                attention.
                            </p>
                            <a href="" className="text-blue-600 hover:underline text-sm">Read more →</a>
                        </div>

                        <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Post Title Two</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                                attention.
                            </p>
                            <a href="" className="text-blue-600 hover:underline text-sm">Read more →</a>
                        </div>

                        <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Post Title Three</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                                attention.
                            </p>
                            <a href="" className="text-blue-600 hover:underline text-sm">Read more →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}