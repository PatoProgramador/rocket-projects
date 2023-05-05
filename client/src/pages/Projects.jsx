import { ProjectForm } from "../components/ProjectForm";
import { ProjectList } from "../components/ProjectList";

export function Projects() {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg shadow-back p-8 h-4/5 w-4/5 lg:w-1/2" >
        <ProjectForm/>
    </div>
  )
}
