import SignupPage from "@/components/auth/SignupPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up - Payme",
};

export default function Page() {
  return <SignupPage />;
}
