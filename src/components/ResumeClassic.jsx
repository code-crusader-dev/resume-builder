export default function ResumeClassic({ data }) {
  return (
    <div className="bg-white p-10 shadow text-black">
      {/* Header */}
      <h1 className="text-4xl font-serif font-bold text-center">
        {data.name || "Your Name"}
      </h1>
      <p className="text-center text-gray-600">
        {data.title || "Job Title"}
      </p>
      <p className="text-center text-sm mt-2 mb-6">
        {data.email} • {data.phone}
      </p>

      {/* Summary */}
      {data.summary && (
        <>
          <SectionTitle title="Summary" />
          <p className="text-sm mb-4">{data.summary}</p>
        </>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <>
          <SectionTitle title="Experience" />
          {data.experience.map((e, i) => (
            <div key={i} className="mb-4 text-sm">
              <p className="font-semibold">
                {e.role} — {e.company}
              </p>
              <p className="text-gray-600">{e.duration}</p>
              <ul className="list-disc ml-5 mt-1">
                {e.points.split("\n").map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              
            </div>
          ))}
        </>
      )}
      
      {/*Projects*/}
      {data.projects.length > 0 && (
        <>
          <h3 className="font-bold uppercase mt-6 mb-1">
            Projects
          </h3>

          {data.projects.map((p, i) => (
            <div key={i} className="mb-3 text-sm">
              <p className="font-semibold">
                {p.name}
              </p>
              <p className="text-gray-600">
                {p.tech}
              </p>
              <ul className="list-disc ml-5 mt-1">
                {p.points.split("\n").map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}


      {/* Education */}
      {data.education.length > 0 && (
        <>
          <SectionTitle title="Education" />
          {data.education.map((e, i) => (
            <p key={i} className="text-sm mb-1">
              <strong>{e.degree}</strong>, {e.institute} ({e.year})
            </p>
          ))}
        </>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <>
          <SectionTitle title="Skills" />
          <ul className="grid grid-cols-2 list-disc ml-5 text-sm">
            {data.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="font-bold uppercase mb-2 mt-6">
      {title}
    </h3>
  );
}
