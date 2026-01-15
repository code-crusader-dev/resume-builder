import { useState } from "react";
import ResumeClassic from "../components/ResumeClassic";
import ResumeModern from "../components/ResumeModern";

export default function Builder() {
  const [template, setTemplate] = useState("classic");

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    skills: [],
    education: [],
    experience: [],
    projects: [],
  });

  /* ================= SKILLS ================= */
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;
    setData({ ...data, skills: [...data.skills, skill.trim()] });
    setSkill("");
  };

  const editSkill = (value, index) => {
    setSkill(value);
    setData({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };

  const removeSkill = (index) => {
    setData({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };

  /* ================= EDUCATION ================= */
  const [edu, setEdu] = useState({ degree: "", institute: "", year: "" });

  const addEducation = () => {
    if (!edu.degree) return;
    setData({ ...data, education: [...data.education, edu] });
    setEdu({ degree: "", institute: "", year: "" });
  };

  const editEducation = (item, index) => {
    setEdu(item);
    setData({
      ...data,
      education: data.education.filter((_, i) => i !== index),
    });
  };

  const removeEducation = (index) => {
    setData({
      ...data,
      education: data.education.filter((_, i) => i !== index),
    });
  };

  /* ================= EXPERIENCE ================= */
  const [exp, setExp] = useState({
    role: "",
    company: "",
    duration: "",
    points: "",
  });

  const addExperience = () => {
    if (!exp.role) return;
    setData({ ...data, experience: [...data.experience, exp] });
    setExp({ role: "", company: "", duration: "", points: "" });
  };

  const editExperience = (item, index) => {
    setExp(item);
    setData({
      ...data,
      experience: data.experience.filter((_, i) => i !== index),
    });
  };

  const removeExperience = (index) => {
    setData({
      ...data,
      experience: data.experience.filter((_, i) => i !== index),
    });
  };

  /* ================= PROJECTS ================= */
  const [project, setProject] = useState({
    name: "",
    tech: "",
    points: "",
  });

  const addProject = () => {
    if (!project.name) return;
    setData({ ...data, projects: [...data.projects, project] });
    setProject({ name: "", tech: "", points: "" });
  };

  const editProject = (item, index) => {
    setProject(item);
    setData({
      ...data,
      projects: data.projects.filter((_, i) => i !== index),
    });
  };

  const removeProject = (index) => {
    setData({
      ...data,
      projects: data.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <h2 className="text-xl font-semibold">Resume Builder</h2>
        <button className="bg-black text-white px-4 py-2 rounded">
          Download PDF
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* LEFT FORM */}
        <div className="bg-white p-6 rounded shadow">

          {/* TEMPLATE */}
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full p-2 border rounded mb-6"
          >
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
          </select>

          {/* BASIC INFO */}
          <input className="w-full mb-3 p-2 border rounded" placeholder="Full Name"
            onChange={(e) => setData({ ...data, name: e.target.value })} />

          <input className="w-full mb-3 p-2 border rounded" placeholder="Job Title"
            onChange={(e) => setData({ ...data, title: e.target.value })} />

          <input className="w-full mb-3 p-2 border rounded" placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })} />

          <input className="w-full mb-4 p-2 border rounded" placeholder="Phone"
            onChange={(e) => setData({ ...data, phone: e.target.value })} />

          <textarea
            className="w-full mb-6 p-2 border rounded"
            rows="3"
            placeholder="Professional Summary"
            onChange={(e) => setData({ ...data, summary: e.target.value })}
          />

          {/* SKILLS */}
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex gap-2 mb-2">
            <input className="flex-1 p-2 border rounded"
              value={skill}
              onChange={(e) => setSkill(e.target.value)} />
            <button className="bg-black text-white px-4 rounded" onClick={addSkill}>
              Add
            </button>
          </div>

          {data.skills.map((s, i) => (
            <div key={i} className="text-sm mb-1">
              {s}{" "}
              <button
                onClick={() => editSkill(s, i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                edit
              </button>{" "}
              <button
                onClick={() => removeSkill(i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                remove
              </button>
            </div>
          ))}

          {/* EDUCATION */}
          <h3 className="font-semibold mt-6 mb-2">Education</h3>
          <input className="w-full mb-2 p-2 border rounded" placeholder="Degree"
            value={edu.degree}
            onChange={(e) => setEdu({ ...edu, degree: e.target.value })} />

          <input className="w-full mb-2 p-2 border rounded" placeholder="Institute"
            value={edu.institute}
            onChange={(e) => setEdu({ ...edu, institute: e.target.value })} />

          <input className="w-full mb-2 p-2 border rounded" placeholder="Year"
            value={edu.year}
            onChange={(e) => setEdu({ ...edu, year: e.target.value })} />

          <button
            onClick={addEducation}
            className="bg-black text-white px-4 py-2 rounded mb-2"
          >
            Add Education
          </button>

          {data.education.map((e, i) => (
            <div key={i} className="text-sm mb-1">
              {e.degree}, {e.institute} ({e.year}){" "}
              <button
                onClick={() => editEducation(e, i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                edit
              </button>{" "}
              <button
                onClick={() => removeEducation(i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                remove
              </button>
            </div>
          ))}

          {/* EXPERIENCE */}
          <h3 className="font-semibold mt-6 mb-2">Experience</h3>
          <input className="w-full mb-2 p-2 border rounded" placeholder="Role"
            value={exp.role}
            onChange={(e) => setExp({ ...exp, role: e.target.value })} />

          <input className="w-full mb-2 p-2 border rounded" placeholder="Company"
            value={exp.company}
            onChange={(e) => setExp({ ...exp, company: e.target.value })} />

          <input className="w-full mb-2 p-2 border rounded" placeholder="Duration"
            value={exp.duration}
            onChange={(e) => setExp({ ...exp, duration: e.target.value })} />

          <textarea
            className="w-full mb-2 p-2 border rounded"
            rows="3"
            placeholder="Responsibilities (one per line)"
            value={exp.points}
            onChange={(e) => setExp({ ...exp, points: e.target.value })}
          />

          <button
            onClick={addExperience}
            className="bg-black text-white px-4 py-2 rounded mb-2"
          >
            Add Experience
          </button>

          {data.experience.map((e, i) => (
            <div key={i} className="text-sm mb-2">
              {e.role} — {e.company}{" "}
              <button
                onClick={() => editExperience(e, i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                edit
              </button>{" "}
              <button
                onClick={() => removeExperience(i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                remove
              </button>
            </div>
          ))}

          {/* PROJECTS */}
          <h3 className="font-semibold mt-6 mb-2">Projects</h3>
          <input className="w-full mb-2 p-2 border rounded" placeholder="Project Name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })} />

          <input className="w-full mb-2 p-2 border rounded" placeholder="Tech Stack"
            value={project.tech}
            onChange={(e) => setProject({ ...project, tech: e.target.value })} />

          <textarea
            className="w-full mb-2 p-2 border rounded"
            rows="3"
            placeholder="Project details (one per line)"
            value={project.points}
            onChange={(e) => setProject({ ...project, points: e.target.value })}
          />

          <button
            onClick={addProject}
            className="bg-black text-white px-4 py-2 rounded mb-2"
          >
            Add Project
          </button>

          {data.projects.map((p, i) => (
            <div key={i} className="text-sm mb-2">
              {p.name} ({p.tech}){" "}
              <button
                onClick={() => editProject(p, i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                edit
              </button>{" "}
              <button
                onClick={() => removeProject(i)}
                className="text-xs px-2 py-0.5 rounded border bg-gray-100 hover:bg-gray-200"
              >
                remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT PREVIEW */}
        {template === "classic" ? (
          <ResumeClassic data={data} />
        ) : (
          <ResumeModern data={data} />
        )}
      </div>
    </div>
  );
}
