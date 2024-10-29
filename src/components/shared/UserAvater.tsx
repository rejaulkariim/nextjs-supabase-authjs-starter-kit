import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import Image from "next/image";
import { FC } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <Button size="icon" className="flex-none rounded-full">
          <Image
            src={user?.image || ""}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full bg-background object-cover"
          />
        </Button>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
