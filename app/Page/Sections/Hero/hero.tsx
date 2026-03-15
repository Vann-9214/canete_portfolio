import Messages from "./messages";
import Social from "./socials";
import { ActionButtons } from "./buttons";
import Picture from "./picture";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden px-5 pt-[clamp(88px,8vh+32px,112px)] md:px-8">
      {/* Main Content */}
      <div className="z-20 flex flex-1 flex-col w-full">
        <Messages />

        {/* Grid Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-[900px] pt-[clamp(8px,17.86vh-142.86px,40px)]">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <div className="hidden md:block">
              <ActionButtons />
            </div>
            <Social />
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end items-center w-full">
            <Picture />
          </div>
        </div>
      </div>
    </section>
  );
}
