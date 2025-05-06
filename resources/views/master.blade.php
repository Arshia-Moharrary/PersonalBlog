<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Master Layout</title>
</head>

<body>
    <header class="bg-white shadow-sm">
        <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-center space-x-6 text-sm text-gray-600">
            <a href="" class="hover:text-black transition">Home</a>
            <a href="" class="hover:text-black transition">Blog</a>
            <a href="" class="hover:text-black transition">About</a>
            <a href="" class="hover:text-black transition">Contact</a>
        </nav>
    </header>

    <section class="relative text-gray-800 py-24">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://your-image-url.com');">
        </div>
        <div class="relative max-w-6xl mx-auto px-4 text-center">
            <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">
                Welcome to My Personal Blog
            </h1>
            <p class="text-lg sm:text-xl mb-6 leading-8">
                A space where I share my thoughts, experiences, and more.<br> Join me on this journey!
            </p>
            <a href="#latest-posts" class="bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 text-lg transition">
                Read Latest Posts
            </a>
        </div>
    </section>

    <section id="latest-posts" class="bg-white text-gray-800 py-20 border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 text-center">Latest Posts</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-semibold mb-2">Post Title One</h3>
                    <p class="text-sm text-gray-600 mb-4">
                        A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                        attention.
                    </p>
                    <a href="" class="text-blue-600 hover:underline text-sm">Read more →</a>
                </div>

                <div class="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-semibold mb-2">Post Title Two</h3>
                    <p class="text-sm text-gray-600 mb-4">
                        A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                        attention.
                    </p>
                    <a href="" class="text-blue-600 hover:underline text-sm">Read more →</a>
                </div>

                <div class="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-semibold mb-2">Post Title Three</h3>
                    <p class="text-sm text-gray-600 mb-4">
                        A short excerpt or summary of the blog post goes here. It's designed to attract the reader's
                        attention.
                    </p>
                    <a href="" class="text-blue-600 hover:underline text-sm">Read more →</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-100 border-t border-gray-200 text-gray-700 py-8">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">&copy; 2025 My Personal Blog. All rights reserved.</p>

            <div class="flex space-x-4 mt-4 md:mt-0">
                <a href="#" class="text-sm hover:underline">About</a>
                <a href="#" class="text-sm hover:underline">Contact</a>
                <a href="#" class="text-sm hover:underline">Privacy Policy</a>
            </div>
        </div>
    </footer>
</body>

</html>
