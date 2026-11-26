import Background from "./Background";
import Logo from "./Logo";
import "./auth.css";

export default function AuthLayout({ children }) {
    return (
        <main className="auth-layout">
            <Background />
            <Logo />
            <div className="auth-content">
                {children}
            </div>
        </main>
    );
}