import { useState } from "react";

const Select = () =>  {

  const [status, setStatus] = useState("");

  return (
    <div className="App">
      <select
        className="form-control"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default Select;