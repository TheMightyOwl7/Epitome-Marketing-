"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { supabase, type ContactSubmission } from "@/lib/supabase";
import { Loader2, CheckCircle2, Send } from "lucide-react";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().optional(),
    phone: z.string().optional(),
    service_interest: z.string().optional(),
    budget_range: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const services = [
    { value: "google-ads", label: "Google Ads" },
    { value: "facebook-ads", label: "Facebook Ads" },
    { value: "instagram-ads", label: "Instagram Ads" },
    { value: "social-media", label: "Social Media Management" },
    { value: "full-service", label: "Full Service Package" },
    { value: "consultation", label: "Strategy Consultation" },
];

const budgetRanges = [
    { value: "under-5k", label: "Under $5,000/month" },
    { value: "5k-10k", label: "$5,000 - $10,000/month" },
    { value: "10k-25k", label: "$10,000 - $25,000/month" },
    { value: "25k-50k", label: "$25,000 - $50,000/month" },
    { value: "over-50k", label: "$50,000+/month" },
];

interface ContactFormProps {
    onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            service_interest: "",
            budget_range: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        setError(null);

        try {
            const submission: ContactSubmission = {
                name: data.name,
                email: data.email,
                company: data.company || undefined,
                phone: data.phone || undefined,
                service_interest: data.service_interest || undefined,
                budget_range: data.budget_range || undefined,
                message: data.message,
            };

            const { error: supabaseError } = await supabase
                .from("contact_submissions")
                .insert([submission]);

            if (supabaseError) {
                throw new Error(supabaseError.message);
            }

            setIsSubmitted(true);
            form.reset();
            onSuccess?.();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                </h3>
                <p className="text-muted-foreground font-body max-w-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.
                </p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="john@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Company" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="+27 72 123 4567"  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="service_interest"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service Interest</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {services.map((service) => (
                                            <SelectItem key={service.value} value={service.value}>
                                                {service.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="budget_range"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Monthly Budget</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {budgetRanges.map((range) => (
                                            <SelectItem key={range.value} value={range.value}>
                                                {range.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </Button>

                <p className="text-xs text-muted-foreground text-center font-body">
                    We respect your privacy. Your information will never be shared with third parties.
                </p>
            </form>
        </Form>
    );
}
