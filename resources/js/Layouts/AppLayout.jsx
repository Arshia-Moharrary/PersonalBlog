import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function AppLayout({ children }) {
    return (
        <div>
            <Header />
            
            {children}

            <Footer />
        </div>
    )
}
