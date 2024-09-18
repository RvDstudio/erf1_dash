import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export function useAuthSession(): { session: Session | null, isLoading: boolean } {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return { session, isLoading };
}