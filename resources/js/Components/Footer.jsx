export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 <a className="text-blue-600 hover:underline" href="https://github.com/Arshia-Moharrary" target="_blank">Arshia Moharrary</a>. All rights reserved.</p>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-sm hover:underline">About</a>
                    <a href="#" className="text-sm hover:underline">Contact</a>
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}