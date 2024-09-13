import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  // Check if session exists and the user is authenticated
  if (!session || !session.user) {
    return <div>Not authenticated</div>;
  }

  // Check if the user is an admin
  if (!session.user.isAdmin) {
    // Redirect non-admin users to an unauthorized page
    redirect("/login");
    return null; // Ensure no rendering occurs after redirection
  }

  // If authenticated and isAdmin, render the page content
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
