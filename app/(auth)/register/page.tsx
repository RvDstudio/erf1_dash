import { RegisterForm } from "./register-form";
import { Suspense } from "react";
import Image from "next/image";

export default async function RegisterPage() {
  return (
    <div className="w-full lg:grid  lg:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center h-screen py-12">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">
            Registreer hier voor je Erf1 account
          </h1>
          <p className="text-balance text-muted-foreground mb-6">
            Enter your username and email below to create your account
          </p>
        </div>
        <Suspense fallback={<>Loading...</>}>
          <RegisterForm />
        </Suspense>
      </div>
      <div className="hidden h-screen bg-muted lg:block">
        <div className="w-full h-screen relative pt-[100%]">
          <Image
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
