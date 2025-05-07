export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'border-gray-300 text-primary shadow-sm focus:ring-primary cursor-pointer ' +
                className
            }
        />
    );
}
