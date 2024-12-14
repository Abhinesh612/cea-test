"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/hooks/use-toast"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const FormSchema = z.object({
    name: z
        .string()
        .max(60, {
            message: "Name must not be longer thatn 60 character. Use first 60 characters of your name"
        }),
    email: z
        .string()
        .email(),
    mesg: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(300, {
            message: "Bio must not be longer than 300 characters.",
        }),
})

export function Contact() {
    return (
        <Card className="w-[300px] md:w-[450px]">
            <CardHeader>
                <CardTitle>CONTACT</CardTitle>
                <CardDescription>Feel free to contact us with any questions or inquiries. We&quot;re here to help!</CardDescription>
            </CardHeader>
            <CardContent>
                <ContactForm />
            </CardContent>
        </Card>
    )
}


function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    // function onSubmit(data: z.infer<typeof FormSchema>) {
    //     console.log("Form submitted with data:", data);
    //     toast({
    //         title: "You submitted the following values:",
    //         description: (
    //             <pre className="mt-2 w-[340px] rounded-md bg-black bg-sslate-950 p-4">
    //                 <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //             </pre>
    //         ),
    //     });
    // }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.mesg,
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Form submitted successfully!",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-black p-4">
                            <code className="text-white">{JSON.stringify("Submited", null, 2)}</code>
                        </pre>
                    ),
                });
            } else {
                toast({
                    title: "Submission failed",
                    description: result.message || "There was an error with your submission.",
                });
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again later.",
            });
        }
    }



    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-11/12 md:w-4/5 space-y-6">
                <FormField
                    control={form.control}
                    name="name" // Ensure you're including the name field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your Name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email" // Ensure you're including the email field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mesg"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Type your message here."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You will receive a response from CEA at your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}