import { useState, useCallback } from "react";

function App() {
  // * write all the useState which are observed in the first sight.
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_+-={}[];:<>?/,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className=" text-white text-center mb-3">PassWord Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-4"
          placeholder="Password"
        />
        <button className="bg-blue-800 rounded-sm outline-none text-white px-3 py-0.5 shrink-0 ">
          Copy
        </button>
      </div>
      <div>
        <div className="flex text-sm gap-x-2">
          
        </div>
      </div>
    </div>
  );
}

export default App;
