import propertyImg from "@/public/assets/projects/property.jpg";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-emerald-800">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="React Js"
          />
          <ProjectItem
            title="crypto Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="Next Js"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="React Js"
          />
          <ProjectItem
            title="testing Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="Next Js"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="React Js"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            stack="Next Js"
          />
        </div>
      </div>
    </div>
  );
}
