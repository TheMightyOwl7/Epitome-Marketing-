"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, X } from "lucide-react";

export function ExpandableCards() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 dark:bg-black/50 h-full w-full z-10 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-background dark:bg-zinc-900 sm:rounded-3xl overflow-hidden border border-border"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                {/* Header Gradient Placeholder */}
                                <div className="w-full h-40 bg-gradient-gold opacity-20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150"></div>
                                </div>
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-6">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-display font-medium text-foreground text-2xl"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-muted-foreground font-body text-base mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        layoutId={`button-${active.title}-${id}`}
                                        className=""
                                    >
                                        <Button variant="hero" size="sm" onClick={() => setActive(null)}>
                                            Close
                                        </Button>
                                    </motion.div>
                                </div>
                                <div className="pt-0 relative px-6 pb-6">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-muted-foreground text-sm font-body h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                                    >
                                        <div className="grid grid-cols-2 gap-4 w-full mb-4">
                                            {active.content.stats.map((stat, idx) => (
                                                <div key={idx} className="bg-muted/50 p-4 rounded-xl">
                                                    <p className="text-2xl font-display font-bold text-gradient-gold">{stat.value}</p>
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="leading-relaxed">
                                            {active.content.story}
                                        </p>

                                        <div className="w-full border-t border-border pt-4">
                                            <p className="font-semibold text-foreground mb-2">Key Strategy:</p>
                                            <p>{active.content.strategy}</p>
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="w-full mx-auto grid md:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-6 flex flex-col sm:flex-row justify-between items-center bg-card border border-border rounded-xl cursor-pointer hover:border-primary/50 hover:shadow-gold transition-all duration-300 group"
                    >
                        <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full">
                            <motion.div
                                layoutId={`image-${card.title}-${id}`}
                                className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center flex-shrink-0"
                            >
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-display font-medium text-foreground text-lg text-center sm:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-muted-foreground font-body text-sm text-center sm:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">Read Case Study</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        title: "TechFlow.io",
        description: "B2B SaaS Pipeline Growth",
        ctaText: "Read Case Study",
        ctaLink: "#",
        content: {
            stats: [
                { value: "2.4x", label: "Pipeline Growth" },
                { value: "-38%", label: "CPA Reduction" }
            ],
            story: "TechFlow was struggling with high CPLs on LinkedIn. We restructured their account architecture and introduced value-based bidding.",
            strategy: "Shifted budget from broad targeting to intent-based layering and introduced a 'Founder-Led' creative strategy."
        },
    },
    {
        title: "LuxeWear",
        description: "DTC E-commerce Scale",
        ctaText: "Read Case Study",
        ctaLink: "#",
        content: {
            stats: [
                { value: "$120k", label: "Monthly Rev" },
                { value: "4.2", label: "ROAS" }
            ],
            story: "LuxeWear had hit a generic creative wall. We implemented our 'Hook-Story-Offer' testing framework to crack cold traffic.",
            strategy: "Aggressive creative testing (UGC + High Polish) combined with CBO scaling campaigns on Meta."
        },
    },
    {
        title: "LegalPro",
        description: "High-Ticket Lead Gen",
        ctaText: "Read Case Study",
        ctaLink: "#",
        content: {
            stats: [
                { value: "450", label: "Qual. Leads" },
                { value: "$1.5M", label: "Pipeline Added" }
            ],
            story: "LegalPro needed leads that actually closed, not just form fills. We implemented offline conversion tracking to optimize for signed cases.",
            strategy: "Google Ads 'Alpha/Beta' campaign structure paired with dedicated landing pages for each practice area."
        },
    },
];
