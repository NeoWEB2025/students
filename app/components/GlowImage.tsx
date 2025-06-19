'use client'
import React, {useEffect, useRef, useState} from "react";
import mountain from "@/app/assets/img.png";
import {StaticImageData} from "next/image";

interface GlowImageProps {
    image: StaticImageData;
}

export default function GlowImage(props: GlowImageProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [glowColor, setGlowColor] = useState<string>("rgba(255, 255, 255, 0.5)");
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        const savedGlowColor = localStorage.getItem("glowColor");
        if (savedGlowColor) {
            setGlowColor(savedGlowColor);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const image = imageRef.current;

        if (canvas && image && imageLoaded) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                let r = 0, g = 0, b = 0, count = 0;

                for (let i = 0; i < data.length; i += 4) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }

                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);

                const newGlowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
                setGlowColor(newGlowColor);
                localStorage.setItem("glowColor", newGlowColor);
            }
        }
    }, [imageLoaded]);

    return(
        <div className="relative inline-block overflow-hidden justify-items-center py-10">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full hidden" />

            <img
                ref={imageRef}
                className="relative z-10 object-cover h-full rounded-3xl"
                style={{
                    filter: `drop-shadow(30px 0 50px ${glowColor})`
                }}
                src={props.image.src}
                alt="mountain"
                onLoad={handleImageLoad}
            />
        </div>
    )
}