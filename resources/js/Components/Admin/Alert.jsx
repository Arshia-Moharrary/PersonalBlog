import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

export default function Alert({ type, message, duration = 3000, onClose }) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
            onClose?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    const icons = {
        success: <CheckCircle className="text-green-600 w-6 h-6" />,
        error: <XCircle className="text-red-600 w-6 h-6" />,
    }

    const colors = {
        success: "bg-green-100 border-green-500 text-green-700",
        error: "bg-red-100 border-red-500 text-red-700",
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => {
                        setShow(false)
                        onClose?.()
                    }}
                    className={`fixed top-6 right-6 z-50 border-l-4 p-4 rounded-xl shadow-md cursor-pointer ${colors[type]}`}
                >
                    <div className="flex items-start gap-3">
                        {icons[type]}
                        <div className="text-sm">{message}</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
