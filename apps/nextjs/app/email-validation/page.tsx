import { EmailValidationForm } from "@/app/email-validation/EmailValidationForm";
import "./EmailValidation.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email validation",
};

export default function EmailValidationPage() {
  return (
    <div>
      <noscript>JS disabled</noscript>
      <EmailValidationForm />
    </div>
  );
}
