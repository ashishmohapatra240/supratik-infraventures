import Image from "next/image";
import Link from "next/link";
import { MediaItem } from "@/types/media";

interface MediaCardProps {
  item: MediaItem;
  imagePosition?: "left" | "right";
}

export default function MediaCard({ item, imagePosition = "left" }: MediaCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className={`relative aspect-[4/3] ${imagePosition === "right" ? "md:order-2" : ""}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className={`space-y-6 ${imagePosition === "right" ? "md:order-1" : ""}`}>
        <p className="text-gray-600 leading-relaxed text-sm">
          {item.description}
        </p>
        <Link
          href={item.link}
          className="inline-flex items-center gap-2 text-[#F15A24] hover:text-[#d14416] transition-colors text-sm"
        >
          Learn More
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform group-hover:translate-x-1"
          >
            <path
              d="M13.5 19L20.5 12L13.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 