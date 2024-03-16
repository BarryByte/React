import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State variables
  const [length, setLength] = useState(8); // Password length
  const [numberAllowed, setNumberAllowed] = useState(false); // Whether numbers are allowed in the password
  const [charAllowed, setCharAllowed] = useState(false); // Whether special characters are allowed in the password
  const [password, setPassword] = useState(""); // Generated password

  // Ref hook
  const passwordRef = useRef(null); // Reference to the password input field

  // Function to copy the generated password to the clipboard
  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Function to generate a new password
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[];:<>?/,";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Generate a new password whenever the length, numberAllowed, or charAllowed changes
  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center mb-3">PassWord Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-4"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassToClip}
          className="bg-blue-800 rounded-sm outline-none text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
