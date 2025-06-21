import InternTestimonials from "@/components/InternTestimony";
import RecognitionsSection from "@/components/Recognisation";
import RoadmapSection from "@/components/RoadMap";
import SaveTimeSection from "@/components/Vision";
import WhyChooseUs from "@/components/WhyUs";

export default function AboutUs() {
    return ( 
        <div>
            <RoadmapSection/>
            <SaveTimeSection/>
            <WhyChooseUs/>
            <InternTestimonials/>
            <RecognitionsSection/>
        </div>
    )
}