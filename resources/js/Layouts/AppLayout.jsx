import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { usePage } from "@inertiajs/react";

export default function AppLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div>
            <Header auth={auth} />
            
            {children}

            <Footer />
        </div>
    )
}
