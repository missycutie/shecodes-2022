import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import VietnamIcon from "../../assets/svg/VietnamIcon";
import EnglandIcon from "../../assets/svg/EnglandIcon";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const LanguageSwitch = () => {
  return (
    <Listbox value="vi">
      <Listbox.Button className="relative w-full rounded-md border border-neutral-20 py-2 pl-5 pr-12 text-body16 focus:border-primary-50 focus:outline-none focus:ring-primary-50">
        <div className="truncate">
          <div className="flex flex-row items-center space-x-4">
            <div className="relative h-6 w-6">
              <VietnamIcon className="pr-4" />
            </div>
            <p className="m-w-[75px]">Việt Nam</p>
          </div>
        </div>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Listbox.Options className="space-y-2 rounded bg-white p-2 shadow-lg focus:outline-none flex flex-col">
          <Listbox.Option
            key="en"
            value="en"
            className={({ active }) =>
              `relative cursor-pointer select-none rounded py-2 px-4  ${
                active ? "text-primary-50 bg-primary-10" : "text-gray-900"
              }`
            }>
            <div className="flex flex-row items-center space-x-4">
              <div className="relative h-6 w-6">
                <EnglandIcon className="pr-4" />
              </div>
              <p className="min-w-[75px]">English</p>
            </div>
          </Listbox.Option>
          <Listbox.Option
            key="vi"
            value="vi"
            className={({ active }) =>
              `relative cursor-pointer select-none rounded py-2 px-4  ${
                active ? "text-primary-50 bg-primary-10" : "text-gray-900"
              }`
            }>
            <div className="flex flex-row items-center space-x-4">
              <div className="relative h-6 w-6">
                <VietnamIcon className="pr-4" />
              </div>
              <p className="max-w-[75px]">Việt Nam</p>
            </div>
          </Listbox.Option>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default LanguageSwitch;
