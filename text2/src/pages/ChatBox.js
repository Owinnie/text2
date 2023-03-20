import { useState } from "react";
//import html2canvas from "html2canvas";
import './ChatBox.css'
import { FaSearch } from "react-icons/fa";

const OPENAI_API_KEY = process.env.REACT_APP_API_KEY

const ChatBox = () => {

  const [selectedOption, setSelectedOption] = useState("to_image"); // state to track selected option
  const [searchInput, setSearchInput] = useState(""); // state to track user input
  const [output, setOutput] = useState(""); // state to track output (image or speech)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // update selected option when radio button is changed
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value); // update user input when search box is changed
  };

  const handleSearch = async () => {
    if (selectedOption === "to_image") {
      // convert user input to image and update output state
      const response = await fetch(
        `https://api.openai.com/v1/images/generations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "image-alpha-001",
            prompt: `Generate an image of "${searchInput}"`,
            num_images: 1,
            size: "256x256",
          }),
        }
      );
      const data = await response.json();
      const imgUrl = data.data[0].url;
      setOutput(imgUrl);
    } else if (selectedOption === "to_speech") {
      // convert user input to speech and read it out
      const msg = new SpeechSynthesisUtterance(searchInput);
      window.speechSynthesis.speak(msg);
      setOutput(searchInput);
    }
  };

  return (
    <div>
      <div  className='rb'>
      <label>
          <input
            type="radio"
            value="to_image"
            checked={selectedOption === "to_image"}
            onChange={handleOptionChange}
          />
          to_image
        </label>
        <label>
          <input
            type="radio"
            value="to_speech"
            checked={selectedOption === "to_speech"}
            onChange={handleOptionChange}
          />
          to_speech
        </label>
      </div>
      <div className='cb'>
      <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Enter your text here"
        />
        <button onClick={handleSearch}>
          <FaSearch /> {/* display search icon */}
        </button>
      </div>
      <div className='otpt'>
        {/* display output (image or speech) */}
        {selectedOption === "to_image" && output && (
          <img src={output} alt={searchInput} />
        )}
        {selectedOption === "to_speech" && output && <p>{output}</p>}
      </div>
    </div>
  );
}

export default ChatBox