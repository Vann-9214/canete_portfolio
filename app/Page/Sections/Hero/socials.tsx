import Image from "next/image";

export default function Social() {
  // Container
  return (
    <div className="flex w-full justify-center md:justify-start items-center gap-10 mt-8 md:mt-6">
      <a
        href="#"
        className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-white transition-transform active:scale-95"
      >
        <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-white transition-transform active:scale-95"
      >
        <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-white transition-transform active:scale-95"
      >
        <Image src="/github.svg" alt="GitHub" width={24} height={24} />
      </a>
    </div>
  );
}
