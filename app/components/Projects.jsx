import propertyImg from "@/public/assets/projects/property.jpg";
import skysphere from "@/public/assets/projects/skysphere.jpg";
import notewrite from "@/public/assets/projects/notewrite.jpg";
import santazBlog from "@/public/assets/projects/santazBlog.jpg";
import dataPulse from "@/public/assets/projects/dataPulse.jpg";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-emerald-800">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="DataPulse"
            backgroundImg={dataPulse}
            projectUrl="/projectPages/dataPulse"
            stack="React Js"
          />
          <ProjectItem
            title="Skysphere"
            backgroundImg={skysphere}
            projectUrl="/projectPages/skysphere"
            stack="React Js"
          />
          <ProjectItem
            title="Notewrite"
            backgroundImg={notewrite}
            projectUrl="/projectPages/notewrite"
            stack="React Js"
          />
          <ProjectItem
            title="Santaz Blog"
            backgroundImg={santazBlog}
            projectUrl="/projectPages/santazBlog"
            stack="Next Js"
          />
        </div>
      </div>
    </div>
  );
}
