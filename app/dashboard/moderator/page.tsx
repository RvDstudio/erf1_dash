import { auth } from "@/auth";
import { User } from "@/types"; // Adjust the import based on your project structure

interface ExtendedUser extends Omit<User, "isAdmin, isModerator"> {
  isAdmin: boolean; // Add isAdmin property
  isModerator: boolean; // Add isModerator property
}

export default async function Page() {
  const session = await auth();

  console.log(session);

  // Type guard to ensure session.user is ExtendedUser
  if (
    session &&
    session.user &&
    "isAdmin" in session.user &&
    "isModerator" in session.user
  ) {
    const user = session.user as ExtendedUser;

    // Check if isAdmin or isModerator is truthy
    if (user.isAdmin || user.isModerator) {
      return <p>You are an admin or moderator, welcome!</p>;
    }
  }

  return <p>You are not authorized to view this page!</p>;
}
