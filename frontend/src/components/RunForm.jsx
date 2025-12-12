import { useState } from "react";
import axios from "axios";

export default function RunForm({ onAdded }) {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await axios.post("http://localhost:4000/api/runs", {
      distance: parseFloat(distance),
      time: parseFloat(time),
    });

    onAdded(res.data);

    setDistance("");
    setTime("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="number"
        placeholder="Distance (meters)"
        value={distance}
        onChange={e => setDistance(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Time (seconds)"
        value={time}
        onChange={e => setTime(e.target.value)}
        className="border p-2 w-full"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Calculate Speed
      </button>
    </form>
  );
}