import Image from "next/image";

export default function Picture() {
  return (
    // Wrapper
    <div className="relative w-full max-w-[clamp(250px,calc(30svh_+_40px),280px)] mt-[clamp(0px,calc(128px_-_16vh),16px)] md:max-w-[380px] aspect-[28/38] pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] aspect-square bg-[#B9E2FE] rounded-full blur-[30px]" />
      <Image
        src="/ivan-hero.png"
        alt="Ivan Portrait"
        fill
        className="object-contain object-bottom drop-shadow-2xl"
        priority
        sizes="(max-width: 768px) 100vw, 380px"
      />
    </div>
  );
}
