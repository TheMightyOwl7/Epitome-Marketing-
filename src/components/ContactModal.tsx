"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { ReactNode, useState } from "react";

interface ContactModalProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

export default function ContactModal({
    children,
    title = "Let's Build Your Revenue Engine",
    description = "Fill out the form below and we'll get back to you within 24 hours with a personalized strategy.",
}: ContactModalProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold rounded-t-lg" />

                <DialogHeader className="pb-4">
                    <DialogTitle className="font-display text-2xl font-bold">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="font-body text-muted-foreground">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <ContactForm onSuccess={() => {
                    // Optionally close after a delay to show success message
                    setTimeout(() => setOpen(false), 3000);
                }} />
            </DialogContent>
        </Dialog>
    );
}
