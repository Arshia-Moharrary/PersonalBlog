export default function ErrorList({ errors = {} }) {
    return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">There were some errors with your submission:</h2>
            <ul className="list-disc pl-6">
                {errors.map((error, index) => (
                    <li key={index} className="text-sm">{error}</li>
                ))}
            </ul>
        </div>
    );
}