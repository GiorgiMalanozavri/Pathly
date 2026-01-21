import Image from "next/image";

interface UniversityLogoProps {
  name: string;
  logo: string;
}

export default function UniversityLogo({ name, logo }: UniversityLogoProps) {
  return (
    <div
      className="flex-shrink-0 w-24 h-14 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-center group"
      title={name}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={80}
        height={40}
        className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
      />
    </div>
  );
}
