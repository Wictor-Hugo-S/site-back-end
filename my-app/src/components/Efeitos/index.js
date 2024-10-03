import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Efeitos({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref,{ once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: " 0.9s ease-in-out .6s"
                }}
            >
                {children}
            </span>
        </section>
    );
}