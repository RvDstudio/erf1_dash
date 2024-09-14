import Image from "next/image";
import { RegisterForm } from "./register-form";

export default async function RegisterPage() {
  return (
    <div className="w-full lg:grid  lg:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl text-[#374c69] mb-3">
            Registreer voor een account
          </h1>
          <p className="text-balance text-muted-foreground mb-6">
            Voer hieronder uw e-mailadres in om in te loggen op uw account
          </p>
        </div>

        <RegisterForm />
      </div>
      <div className="hidden h-screen bg-muted lg:block">
        <div className="w-full h-screen relative pt-[100%]">
          <Image
            src="/images/login_bg.png"
            alt="profile"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
