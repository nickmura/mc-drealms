'use client'

import { useEffect, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export default function Confetti() {

    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 3000);
    }, []);

    return (
        <>
            {confetti && <Fireworks autorun={{ speed: 3 }} />}
        </>
    )
}