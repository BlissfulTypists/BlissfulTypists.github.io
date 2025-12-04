"use client"
import { useState } from "react";

export default function TextCarousel() {
    const messages = ["Welcome! We're so glad you're here.", "We are [DRE4M] - Blissful Typists.", "We would love for you to join our team!", "No matter what your WPM is or how long you've been on Nitro Type, you are amazing!", "So, what makes DRE4M special?", <span>We work together<br />We don't blame each other<br />We're a community<br />We type with unity<br />We are winners!</span>, "If you're interested in joining DRE4M, just click join on Nitro Type! We would love to have you!"];
    const [currentMessage, changeCurrentMessage] = useState(0);
    const [textTransform, changeTextTransform] = useState("none");

    function handleNextButtonClick() {
        changeCurrentMessage(currentMessage + 1);
    }

    return (
        <div style={{
            width: "30vw",
            margin: "auto"
        }}>
            <h2 style={{
                transform: textTransform
            }}>{messages[currentMessage]}</h2>
            <button onClick={handleNextButtonClick} style={{
                display: currentMessage < messages.length - 1 ? "default" : "none",
                transitionDuration: "0.3s",
                animation: "growAndShrink 1.5s normal infinite",
                fontSize: "5em",
                background: "none"
            }}>➜</button>
        </div>
    );
}