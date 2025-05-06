import PostBox from "../Components/PostBox"

export default function Home() {
    const posts = [
        {
            title: 'Title Post One!',
            description: `A short excerpt or summary of the blog post goes here. It's designed to attract the reader's`,
        },
        {
            title: 'Title Post Two!',
            description: `A short excerpt or summary of the blog post goes here. It's designed to attract the reader's`,
        },
        {
            title: 'Title Post Three!',
            description: `A short excerpt or summary of the blog post goes here. It's designed to attract the reader's`,
        },
    ]

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

            <PostBox title="Latest Posts" id="latest-posts" posts={posts} />
        </div>
    )
}