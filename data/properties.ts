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
        type: "2&3 BHK, Fourplex & Duplex",
        description: "A delightful enclave of 25 well-designed homes, offering the comfort of modern living and the safety of a gated community, where your family’s dreams can grow.",
        image: "/images/property-2.png",
        amenities: [
            { icon: "/icons/key.png", label: "Smart Lock" },
            { icon: "/icons/building.png", label: "High Rise" },
            { icon: "/icons/pool.png", label: "Indoor Swimming Pool" },
            { icon: "/icons/clubhouse.png", label: "Club House" },
            { icon: "/icons/gym.png", label: "Gym" },
            { icon: "/icons/school.png", label: "Sri Chaitanya Techno School" },
            { icon: "/icons/temple.png", label: "Maa Bagalamukhi Temple" },
        ],
    },
    {
        id: 3,
        name: "Supratik Lifestyle III",
        size: "16 exclusive units",
        type: "Gated Community",
        description: "State-of-the-art bowling alley, Club House, Gym, Picturesque garden, Delightful restaurant. With 16 exclusive units, Supratik Lifestyle III provides a serene and intimate community, thoughtfully crafted for peaceful living within the security of a gated complex.",
        image: "/images/property-3.jpg",
        amenities: [
            { icon: "/icons/bowling.png", label: "Bowling Alley" },
            { icon: "/icons/clubhouse.png", label: "Club House" },
            { icon: "/icons/gym.png", label: "Gym" },
            { icon: "/icons/garden.png", label: "Picturesque Garden" },
            { icon: "/icons/restaurant.png", label: "Delightful Restaurant" },
            { icon: "/icons/security.png", label: "24/7 Security" },
        ],
    },
];