import { Property } from "@/types/property";

export const properties: Property[] = [
    {
        id: 1,
        name: "THE TWENTY",
        size: "1980 SQ-FT",
        type: "BESPOKE APARTMENT",
        description: "Our bilingual and trilingual lawyers offer first-rate support to companies from all over the world, in both advisory and litigation matters, in connection with their activities in France.",
        image: "/images/property-1.jpg",
        amenities: [
            { icon: "/icons/key.png", label: "Smart Lock" },
            { icon: "/icons/building.png", label: "High Rise" },
            { icon: "/icons/pool.png", label: "Pool" },
            { icon: "/icons/gym.png", label: "Gym" },
            { icon: "/icons/parking.png", label: "Parking" },
        ],
    },
    {
        id: 2,
        name: "THE VERTEX",
        size: "2100 SQ-FT",
        type: "LUXURY PENTHOUSE",
        description: "Experience unparalleled luxury in our sky-high penthouses, featuring panoramic city views and premium finishes that redefine modern living.",
        image: "/images/property-2.png",
        amenities: [
            { icon: "/icons/key.png", label: "Smart Lock" },
            { icon: "/icons/building.png", label: "High Rise" },
            { icon: "/icons/helipad.png", label: "Helipad" },
            { icon: "/icons/spa.png", label: "Spa" },
            { icon: "/icons/concierge.png", label: "Concierge" },
        ],
    },
    {
        id: 3,
        name: "THE OASIS",
        size: "1850 SQ-FT",
        type: "GARDEN APARTMENT",
        description: "Embrace nature in our exclusive garden apartments, where indoor comfort meets outdoor serenity, creating a perfect balance for modern living.",
        image: "/images/property-3.jpg",
        amenities: [
            { icon: "/icons/key.png", label: "Smart Lock" },
            { icon: "/icons/garden.png", label: "Private Garden" },
            { icon: "/icons/pool.png", label: "Pool" },
            { icon: "/icons/security.png", label: "24/7 Security" },
            { icon: "/icons/parking.png", label: "Parking" },
        ],
    },
];