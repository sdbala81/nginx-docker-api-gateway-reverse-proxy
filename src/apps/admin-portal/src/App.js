import "./App.css";

import { useState } from "react";

function App() {
  const [caption, setCaption] = useState("");

  const callFaculties = () => {
    fetch("http://localhost:82/faculty-service/departments")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setCaption(JSON.stringify(result));
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const callAdmissions = () => {
    fetch("http://localhost:82/admission-service/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setCaption(JSON.stringify(result));
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <div>
      <h1>Admin Portal</h1>

      <div>{caption}</div>

      <div>
        <button type="button" onClick={callFaculties}>
          Call Faculties
        </button>
      </div>

      <div>
        <button type="button" onClick={callAdmissions}>
          Call Admissions
        </button>
      </div>
    </div>
  );
}

export default App;
