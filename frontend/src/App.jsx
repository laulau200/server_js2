import { useEffect, useState } from "react";
import axios from "axios";
import RunForm from "./components/RunForm";
import ResultsList from "./components/ResultsList";

export default function App() {
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/runs").then(res => {
      setRuns(res.data);
    });
  }, []);

  function handleNewRun(run) {
    setRuns(prev => [run, ...prev]);
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">
        Runner Speed Calculator
      </h1>

      <RunForm onAdded={handleNewRun} />
      <ResultsList runs={runs} />
    </div>
  );
}