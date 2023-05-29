import LoginPage from "@/components/auth/LoginPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login - Payme'
}

export default function Page() {
    return <LoginPage/>
}