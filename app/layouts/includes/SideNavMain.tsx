import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Radio } from "lucide-react"; // Ensure lucide-react is installed
import MenuItem from "./MenuItem";
import MenuItemFollow from "./MenuItemFollow";
import { useEffect } from "react";
import { useUser } from "@/app/context/user";
import ClientOnly from "@/app/components/ClientOnly";
import { useGeneralStore } from "@/app/stores/general";

export default function SideNavMain() {
  let { setRandomUsers, randomUsers } = useGeneralStore();
  const contextUser = useUser();
  const pathname = usePathname();

  useEffect(() => {
    setRandomUsers();
  }, []);

  return (
    <>
      <div
        id="SideNavMain"
        className={`
          fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
          ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"}
        `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <MenuItem
              icon={
                <Home
                  size={25}
                  className={
                    pathname === "/" ? "text-[#F02C56]" : "text-gray-600"
                  }
                />
              }
              label="For You"
            />
          </Link>
          <MenuItem
            icon={<Users size={25} className="text-gray-600" />}
            label="Following"
          />

          {contextUser?.user?.id ? (
            <div>
              <div className="border-b lg:ml-2 mt-2" />
              <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Following accounts
              </h3>

              <div className="lg:hidden block pt-3" />
              <ClientOnly>
                <div className="cursor-pointer">
                  {randomUsers?.map((user, index) => (
                    <MenuItemFollow key={index} user={user} />
                  ))}
                </div>
              </ClientOnly>

              <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                See more
              </button>
            </div>
          ) : null}
          <div className="lg:block hidden border-b lg:ml-2 mt-2" />

          <div className="pb-14"></div>
        </div>
      </div>
    </>
  );
}
