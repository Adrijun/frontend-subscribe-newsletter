import { useState } from "react";
import "./loggedin.css";

export function LoggedIn() {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <>
      <section>
        <h2>Du är inloggad!</h2>
        <h3>Vill du prenumerera på vårat nyhetsbrev?</h3>
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </section>
    </>
  );
}

export default LoggedIn;
