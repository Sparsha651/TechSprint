export default function AuthButton({ children, onClick, className = "" }) {
    return (
        <button
            className={`auth-button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}