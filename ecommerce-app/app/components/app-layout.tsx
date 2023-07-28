import Image from "next/image";
import { AppImages } from "../utils/constants";
import AppSearchbox from "./app-searchbox/app-searchbox";
import HeaderActions from "./header-actions/header-actions";
import LanguageSelector from "./language-selector/language-selector";

export const AppLayout: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="container h-16 w-full border flex items-center px-2">
        <Image
          src={AppImages.applogo}
          alt="app logo"
          height={30}
          width={140}
          className="pr-2"
        />
        <AppSearchbox />
        <HeaderActions />
        <div className="ml-4">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
