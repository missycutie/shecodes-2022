import { Disclosure } from "@headlessui/react";
import Button from "../Button";
import Bars3 from "@heroicons/react/solid";
import XMark from "@heroicons/react/solid";

export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-shadow4 ">
          <div className="relative mx-auto flex h-20 max-w-8xl items-center justify-between px-4 desktop:h-header-desktop desktop:px-8">
            {/* Mobile menu button */}
            <Disclosure.Button
              aria-label="menu"
              className="absolute right-4 inline-flex items-center justify-center text-neutral-50 desktop:hidden">
              {open ? (
                <XMark className="fill-neutral-50 desktop:hover:fill-primary-50" />
              ) : (
                <Bars3 className="fill-neutral-50 desktop:hover:fill-primary-50" />
              )}
            </Disclosure.Button>
            <div className="flex h-full flex-nowrap items-center justify-start desktop:flex-1 desktop:justify-between">
              <a
                href="/"
                title="HomePage"
                className="inline-block flex-none relative mr-4 h-7 w-40">
                <img
                  src="/static/icons/Logo.svg"
                  alt=""
                  layout="fill"
                  priority
                />
              </a>
              <div>
                <Button
                  title="Thống kê"
                  className="hidden desktop:block"
                  type="link"
                  href="/">
                  Đăng ký
                </Button>
                <Button
                  title="Thống kê"
                  className="hidden desktop:block"
                  type="link"
                  href="/">
                  Đăng nhập
                </Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="desktop:hidden">
            <div className="flex h-[calc(100vh-80px)] flex-col">
              <div className="overflow-x-none grow overflow-y-auto pt-2 pb-6 shadow-inner"></div>
              <div className="z-10 flex-none p-4 shadow-shadow4Revert">
                <Button
                  title="Thống kê"
                  className="w-full"
                  type="link"
                  href="/">
                  Thống kê
                </Button>
              </div>
            </div>
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  );
}
