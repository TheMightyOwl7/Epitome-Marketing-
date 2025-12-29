"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

interface VortexProps {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    particleCount?: number;
    rangeY?: number;
    baseHue?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
}

export const Vortex = ({
    children,
    className,
    containerClassName,
    particleCount = 700,
    rangeY = 100,
    baseHue = 220,
    baseSpeed = 0.0,
    rangeSpeed = 1.5,
    baseRadius = 1,
    rangeRadius = 2,
    backgroundColor = "#000000",
}: VortexProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeYRef = useRef(rangeY);
    const baseHueRef = useRef(baseHue);
    const baseSpeedRef = useRef(baseSpeed);
    const rangeSpeedRef = useRef(rangeSpeed);
    const baseRadiusRef = useRef(baseRadius);
    const rangeRadiusRef = useRef(rangeRadius);
    const noise3D = createNoise3D();
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];
    let tick = 0;
    let simplexNoise3D: any = noise3D;
    let canvas: HTMLCanvasElement | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let resizeTimeout: any = null;

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas?.getContext("2d") || null;
        if (canvas && ctx) {
            initVortex();
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // Debounce the resize event
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(() => {
                if (canvas && ctx) {
                    resize(canvas, ctx);
                }
            }, 200); // Wait for 200ms after the last resize event
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
        };
    }, []);

    const initVortex = () => {
        if (!canvas || !ctx) return;
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
    };

    const initParticles = () => {
        tick = 0;
        // simplexNoise3D = createNoise3D();

        // Mobile optimization: Reduce particle count on small screens
        const actualParticleCount = window.innerWidth < 768 ? Math.min(particleCount, 50) : particleCount;
        const actualPropsLength = actualParticleCount * particlePropCount;

        particleProps = new Float32Array(actualPropsLength);

        for (let i = 0; i < actualPropsLength; i += particlePropCount) {
            initParticle(i);
        }
    };

    const initParticle = (i: number) => {
        if (!canvas) return;
        let x, y, vx, vy, life, ttl, speed, radius, hue;

        x = Math.random() * canvas.width;
        y = center[1] + (Math.random() * 2 - 1) * rangeYRef.current;
        vx = 0;
        vy = 0;
        life = 0;
        ttl = 50 + Math.random() * 200;
        speed = baseSpeedRef.current + Math.random() * rangeSpeedRef.current;
        radius = baseRadiusRef.current + Math.random() * rangeRadiusRef.current;
        hue = baseHueRef.current + Math.random() * 100;

        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        tick++;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);

        window.requestAnimationFrame(() => draw(canvas, ctx));
    };

    const drawParticles = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < particleProps.length; i += particlePropCount) {
            updateParticle(i, ctx);
        }
    };

    const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
        if (!canvas) return;
        let i2 = 1 + i,
            i3 = 2 + i,
            i4 = 3 + i,
            i5 = 4 + i,
            i6 = 5 + i,
            i7 = 6 + i,
            i8 = 7 + i,
            i9 = 8 + i;
        let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

        x = particleProps[i];
        y = particleProps[i2];
        n = simplexNoise3D(x * 0.00125, y * 0.00125, tick * 0.0005) * 3;
        vx = Math.cos(n) * particleProps[i7];
        vy = Math.sin(n) * particleProps[i7];
        life = particleProps[i5];
        ttl = particleProps[i6];
        speed = particleProps[i7];
        x2 = x + vx;
        y2 = y + vy;
        radius = particleProps[i8];
        hue = particleProps[i9];

        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

        life++;

        particleProps[i] = x2;
        particleProps[i2] = y2;
        particleProps[i5] = life;

        (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
    };

    const drawParticle = (
        x: number,
        y: number,
        x2: number,
        y2: number,
        life: number,
        ttl: number,
        radius: number,
        hue: number,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineWidth = radius;
        ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };

    const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };

    const resize = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        const { innerWidth, innerHeight } = window;

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };

    const renderGlow = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.filter = "blur(8px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();

        ctx.save();
        ctx.filter = "blur(4px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };

    const renderToScreen = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };

    const fadeInOut = (life: number, ttl: number) => {
        const halfTTL = ttl / 2;
        const fade = life < halfTTL ? life / halfTTL : 1 - (life - halfTTL) / halfTTL;
        return fade;
    };

    return (
        <div
            className={cn("relative h-full w-full overflow-hidden", containerClassName)}
            ref={containerRef}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={containerRef}
                className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
            >
                <canvas ref={canvasRef}></canvas>
            </motion.div>

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
