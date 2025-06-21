import { InternComp } from "@/components/InternCompetition";
import InternTestimonials from "@/components/InternTestimony";
import { Participation } from "@/components/Participation";
import PerksAndBenefits from "@/components/Perks";
import RulesSelectionProcess from "@/components/Rules";
import VideoCarousel from "@/components/VedioTab";

export default function SpecialPage() {
    return (
        <div>
            <InternTestimonials/>
            <VideoCarousel/>
            <InternComp/>
            <Participation/>
            <RulesSelectionProcess/>
            <PerksAndBenefits/>
        </div>
    )
}