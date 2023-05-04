export function ProjectCard({ project }) {
  return (
    <div>
        <h2>{project.clientName}</h2>
        <h2>{project.value}</h2>
        <h2>{project.department}</h2>
        <h2>{project.city}</h2>
    </div>
  )
}
