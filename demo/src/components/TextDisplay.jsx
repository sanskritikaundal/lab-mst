import { useState } from 'react';

function TextDisplay() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed → {inputText}</p>
    </div>
  );
}

export default TextDisplay;