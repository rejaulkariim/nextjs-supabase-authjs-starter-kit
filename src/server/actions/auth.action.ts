"use server";

import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const handleLogin = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard" });
  revalidatePath("/dashboard");
};

export const handleLogout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

// export async function getUserFromDB() {
//   const session = await auth();
//   if (!session) {
//     return null;
//   }

//   const user = await db.user.findUnique({
//     where: { email: session?.user?.email || "" },
//   });

//   return user;
// }
