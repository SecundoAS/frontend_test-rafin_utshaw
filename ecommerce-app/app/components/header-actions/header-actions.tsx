import HeartIcon from "@/public/icons/heart.icon";
import UserIcon from "@/public/icons/user.icon";
import React from "react";

export const HeaderActions: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-2 items-center">
      <UserIcon />
      <HeartIcon />
    </div>
  );
};

export default HeaderActions;
