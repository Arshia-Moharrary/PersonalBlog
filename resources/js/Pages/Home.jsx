import PostBox from "../Components/PostBox"
import Hero from "../Components/Hero"
import AppLayout from "@/Layouts/AppLayout"

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
        <AppLayout>
            <Hero />

            <PostBox title="Latest Posts" id="latest-posts" posts={posts} />
        </AppLayout>
    )
}