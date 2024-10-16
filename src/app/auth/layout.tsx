import { ReactNode } from "react";

const AuthLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex justify-center items-center w-full">
      {children}
    </main>
  );
};

export default AuthLayoutPage;
