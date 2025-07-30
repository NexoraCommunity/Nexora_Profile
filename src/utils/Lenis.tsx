"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
            <div className="bg-black text-white">
                {children}x
            </div>
        </ReactLenis>
    );
}

export default SmoothScrolling;