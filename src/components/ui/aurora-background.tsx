"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex flex-col  h-[100vh] items-center justify-center bg-background text-foreground transition-bg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        //   I'm sorry but this is what peak developer performance looks like // triggers.
                        className={cn(
                            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
            
            /* Light Mode Aurora: Subtle Gold/Orange */
            [--aurora:repeating-linear-gradient(100deg,hsl(var(--gold-light))_10%,hsl(var(--gold))_15%,hsl(var(--gold-muted))_20%,hsl(var(--accent))_25%,hsl(var(--gold-light))_30%)]
            
            /* Dark Mode Aurora: Deep Gold/Darker tones */
            dark:[--aurora:repeating-linear-gradient(100deg,hsl(var(--gold))_10%,hsl(var(--gold-dark))_15%,hsl(var(--gold))_20%,hsl(var(--gold-muted))_25%,hsl(var(--gold-dark))_30%)]
            
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}
                    ></div>
                </div>
                {children}
            </div>
        </main>
    );
};
