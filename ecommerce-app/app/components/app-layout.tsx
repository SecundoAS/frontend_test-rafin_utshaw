import Image from "next/image";
import { AppImages } from "../utils/constants";
import AppSearchbox from "./app-searchbox/app-searchbox";

export const AppLayout: React.FC = () => {
  return (
    <div className="h-16 w-full border flex">
      <Image src={AppImages.applogo} alt="app logo" height={30} width={140} />
      <AppSearchbox />
    </div>
  );
};

export default AppLayout;
