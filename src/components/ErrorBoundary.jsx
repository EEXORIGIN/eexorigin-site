import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Logged to the console only — no user data, no server call.
    console.error("Unhandled UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center px-6 py-24 text-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="max-w-md mx-auto">
            <h1 className="heading-serif text-2xl md:text-3xl mb-4">
              Something went wrong.
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              This page hit an unexpected error. Try reloading — if it keeps
              happening, let us know at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eexorigin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--green-deep)" }}
              >
                info@eexorigin.com
              </a>
              .
            </p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
