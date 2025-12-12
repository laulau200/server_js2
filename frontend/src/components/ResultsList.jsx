export default function ResultsList({ runs }) {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Past Runs</h2>

      {runs.map(run => (
        <div key={run._id} className="border p-3 mb-3 rounded">
          <p>Distance: {run.distance} m</p>
          <p>Time: {run.time} s</p>
          <p>Speed: {run.speed.toFixed(2)} m/s</p>
          <p>Date: {new Date(run.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );