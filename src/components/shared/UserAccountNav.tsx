import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DashboardIcon } from "@radix-ui/react-icons";
import { User } from "next-auth";
import Link from "next/link";
import Logout from "./Logout";
import UserAvatar from "./UserAvater";

interface UserAccountNavProps {
  user: User;
}

const UserAccountNav = ({ user }: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-2xl bg-card shadow-lg p-4 mr-10">
        <DropdownMenuLabel className="capitalize">
          {user.name || "User"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard"
              className="cursor-pointer hover:bg-background"
            >
              <DashboardIcon className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          {/* TODO: Show this only for admins */}
          {/* <DropdownMenuItem asChild>
                <Link href="/admin">
                  <Lock className="mr-2 h-4 w-4" />
                  Admin
                </Link>
              </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* TODO: Add a logout functionality */}
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
