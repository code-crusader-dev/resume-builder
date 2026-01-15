export default function ResumeModern({ data }) {
  return (
    <div className="bg-white p-10 shadow text-black border-t-8 border-black">
      {/* Header */}
      <h1 className="text-3xl font-bold">
        {data.name || "Your Name"}
      </h1>
      <p className="text-gray-700">{data.title}</p>
      <p className="text-sm mt-2 mb-4">
        {data.email} • {data.phone}
      </p>

      <Divider />

      {/* Summary */}
      {data.summary && (
        <Block title="Summary">
          {data.summary}
        </Block>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <Block title="Experience">
          {data.experience.map((e, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">
                {e.role} — {e.company}
              </p>
              <p className="text-gray-600 text-sm">{e.duration}</p>
              <ul className="list-disc ml-5 text-sm mt-1">
                {e.points.split("\n").map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Block>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <Block title="Education">
          {data.education.map((e, i) => (
            <p key={i} className="text-sm">
              <strong>{e.degree}</strong>, {e.institute} ({e.year})
            </p>
          ))}
        </Block>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <Block title="Skills">
          <div className="grid grid-cols-2 gap-x-6 text-sm">
            {data.skills.map((s, i) => (
              <span key={i}>• {s}</span>
            ))}
          </div>
        </Block>
      )}
    </div>
  );
}

function Divider() {
  return <hr className="my-4 border-gray-300" />;
}

function Block({ title, children }) {
  return (
    <>
      <h3 className="font-semibold mt-4 mb-1">{title}</h3>
      {children}
    </>
  );
}
