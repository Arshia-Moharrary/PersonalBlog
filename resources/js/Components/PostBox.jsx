export default function PostBox({ title = 'Posts', id = '', posts = [] }) {
    return (
        <section id={id} className="bg-white text-gray-800 py-20 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {post.description}
                            </p>
                            <a href="" className="text-blue-600 hover:underline text-sm">Read more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}