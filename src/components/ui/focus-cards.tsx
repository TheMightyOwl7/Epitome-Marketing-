"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export type CardType = {
    title: string;
    icon: LucideIcon;
    description: string;
    features: string[];
};

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: CardType;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => {
        return (
            <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                    "rounded-2xl relative bg-card border border-border p-8 overflow-hidden h-full transition-all duration-300 ease-out group",
                    hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
                    hovered === index && "scale-[1.02] border-primary/50 shadow-gold"
                )}
            >
                {/* Hover Gradient */}
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500",
                        hovered === index && "opacity-100"
                    )}
                />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <card.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold mb-3 text-foreground transition-colors duration-300">
                        {card.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-grow">
                        {card.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                        {card.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-muted-foreground font-body"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm mt-auto">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                </div>
            </div>
        );
    }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
