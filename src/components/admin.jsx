import { useEffect, useState } from "react";
import IssuesMap from "./issueMap";

function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://backend-ihgr.onrender.com/issues")
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin">
      <div className="container mt-4">
        <h4>Reported Problems</h4>
        <IssuesMap issues={issues} />
      </div>
    </div>
  );
}

export default Home;
