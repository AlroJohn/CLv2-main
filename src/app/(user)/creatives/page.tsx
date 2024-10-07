import { Infinite } from "@/components/reusable-component/Infinite";
import { CreativeCarousel } from "./creative-components/CreativeCarousel";
import { CreativeHeroPage } from "./creative-components/CreativeHeroPage";
import { Subscribe } from "@/components/reusable-component/Subscribe";


export default function CreativeDirectoryPage() {
    return (
        <main className="w-full h-fit">
            <div className="py-[15dvh] flex flex-col w-full gap-[10dvh]">
                <CreativeHeroPage />
                <CreativeCarousel />
            </div>
            <Infinite />
                <Subscribe />
        </main>
    )
}