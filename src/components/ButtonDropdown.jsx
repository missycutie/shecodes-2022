import cn from "classnames";
import ArrowNarrowRight from "@heroicons/react/solid";

export default function ButtonDropdown(props) {
  return (
    <div className="items-center bg-white w-full py-2">
      <a href={props.href} title={props.title}>
        <button
          className={cn(
            "group flex w-full items-center justify-between rounded-lg bg-white p-4 transition-all duration-200 ease-linear desktop:desktop:hover:bg-primary-10 focus:bg-primary-20 active:bg-primary-20"
          )}>
          {props.type === "normal" && (
            <div>
              <p
                className={cn(
                  "text-left text-subtitle18 font-medium text-neutral-90 desktop:group-hover:text-primary-50 desktop:text-body16 desktop:font-normal"
                )}>
                {props.title}
              </p>
            </div>
          )}
          {props.type === "desc" && (
            <div className="flex flex-col justify-start ">
              <p
                className={cn(
                  "text-left text-subtitle18 font-medium text-neutral-90 desktop:group-hover:text-primary-50 desktop:text-body16 desktop:font-normal"
                )}>
                {props.title}
              </p>
              <p className="text-left text-body14 font-medium text-neutral-50 desktop:font-normal">
                {props.desc}
              </p>
            </div>
          )}
          {props.type === "icon" && (
            <div className="flex flex-row items-center space-x-4">
              <div className="relative h-12 w-12">
                {Object.prototype.hasOwnProperty.call(props, "icon") && (
                  <img src={props.icon ?? ""} alt="" layout="fill" />
                )}
              </div>
              <div>
                <p
                  className={cn(
                    "text-left text-subtitle18 font-medium text-neutral-90 desktop:group-hover:text-primary-50 desktop:text-body16 desktop:font-normal"
                  )}>
                  {props.title}
                </p>
              </div>
            </div>
          )}
          <div className=" h-5 w-5 transition-all duration-200 ease-linear desktop:group-hover:inline-block">
            <ArrowNarrowRight className="h-5 w-5" fill="#FE5F00" />
          </div>
        </button>
      </a>
    </div>
  );
}
