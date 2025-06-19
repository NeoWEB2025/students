"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiService } from "@/app/services/api";
import { AuthDal } from "@/app/dal/auth-dal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import mountain from "@/app/assets/img.png";
import GlowImage from "@/app/components/GlowImage";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {toast, Toaster} from "sonner";
import "@/app/globals.css"

export default function RegisterForm() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            toast.promise(AuthDal.register(firstName, lastName, email, password), {
                loading: "Registration in progress, please wait...",
                success: (data) => {
                    const { token } = data.data;
                    apiService.setToken(token);
                    router.push('/dashboard');
                    return "Register in successfully";
                },
                error: "User is already registered with this email. Please login with your credentials or try another email.",
            })
        } catch (error) {
            console.log(error);
            setError('Invalid credentials');
        }
    };

    return (
        <div className={`grid-cols-2 grid backdrop-blur-xl h-[100vh]`}>
            <GlowImage image={mountain}></GlowImage>
            <div className={`justify-center items-center flex`}>
                <Toaster position={`top-right`}></Toaster>
                <Card className={`bg-[#171717] border-[#232323] w-[50vh] flex-col flex h-max justify-center`}>
                    <CardHeader>
                        <CardTitle className={`text-white`}>Create your account</CardTitle>
                        <CardDescription className={`text-[#A1A1A1]`}>
                            Enter your email below to create your account. You will be able to login with your credentials after registration.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-3">
                                    <Label className={`text-white`} htmlFor="firstName">First Name</Label>
                                    <Input
                                        id={`firstName`}
                                        type={`text`}
                                        placeholder={`First Name`}
                                        required
                                        className={`text-white`}
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label className={`text-white`} htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id={`lastName`}
                                        type={`text`}
                                        placeholder={`Last Name`}
                                        required
                                        className={`text-white`}
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label className={`text-white`} htmlFor="email">Email</Label>
                                    <Input
                                        id={`email`}
                                        type={`email`}
                                        placeholder={`m@example.com`}
                                        required
                                        className={`text-white`}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <div className={`flex items-center`}>
                                        <Label className={`text-white`} htmlFor="password">Password</Label>
                                        <a href="#" className={`ml-auto inline-block text-sm underline-offset-4 hover:underline`}>
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input
                                        id={`password`}
                                        type={`password`}
                                        placeholder={`Password`}
                                        required
                                        className={`text-white`}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button type="submit" className="w-full text-[#171717] bg-white hover:bg-[#e3e3e3]">
                                        Register
                                    </Button>
                                    <Button variant="outline" className="w-full text-white border-[#434343] bg-[#212121] hover:bg-[#292929] hover:text-white">
                                        Register with Google
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-white text-sm">
                                Already have an account?{" "}
                                <a href="/login" className="underline underline-offset-4">
                                    Log in
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}