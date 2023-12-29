import styles from './app.module.css'
import { getResult } from "../../services/ApiWrapper";
import { useState } from 'react';

/**
 * The App component is a functional React component that provides an interface
 * for changing the tone and style of a text. It uses state hooks to manage
 * component state and an asynchronous API call to process text input.
 */
export default function App() {
  // State hooks for managing tone, style, writing input, and response
  const [tone, setToneDropdown] = useState("funny");
  const [style, setStyleDropdown] = useState("summarize");
  const [writing, setWriting] = useState("");
  const [response, setResponse] = useState("");

  // Constants to define the type of operation
  const TYPE = {
    TONE: "tone",
    STYLE: "style"
  };

  /**
   * handleToneChange updates the tone state based on dropdown selection.
   * @param {Object} event - The event object from the tone dropdown change.
   */
  const handleToneChange = async (event) => {
    const toneState = event.target.value;
    setToneDropdown(toneState);
  };

  /**
   * handleStyleChange updates the style state based on dropdown selection.
   * @param {Object} event - The event object from the style dropdown change.
   */
  const handleStyleChange = async (event) => {
    const styleState = event.target.value;
    setStyleDropdown(styleState);
  };

  /**
   * getToneValue makes an API call to get the result based on the current tone.
   * It is triggered when the "Change Tone" button is clicked.
   */
  const getToneValue = async () => {
    getResult({ content: writing, type: TYPE.TONE, context: tone }).then((response) => {
      setResponse(response);
    });
  };

  /**
   * getStyleValue makes an API call to get the result based on the current style.
   * It is triggered when the "Take Action" button is clicked.
   */
  const getStyleValue = async () => {
    getResult({ content: writing, type: TYPE.STYLE, context: style }).then((response) => {
      setResponse(response);
    });
  };

  // JSX structure for the component's UI
  return (
    <div>
      {/* Tone selection dropdown */}
      <select className={styles.tone_change} onChange={handleToneChange}
        name='Change tone' id="change_tone_dropdown" value={tone}>
        <option value="funny">Funny</option>
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
      </select>
      <button className={styles.submit_button_tone} name='change_tone' id='change_tone_button' onClick={getToneValue}>Change Tone</button>

      {/* Style selection dropdown */}
      <select className={styles.style_change} name='Change Style' id="change_style_dropdown"
        onChange={handleStyleChange} value={style}>
        <option value="summarize">Summarize</option>
        <option value="vocab">Vocab Suggestion</option>
        <option value="improve">Improve</option>
      </select>
      <button className={styles.submit_button_action} id='change_style_button' onClick={getStyleValue}>Take Action</button>

      {/* Text input area for writing */}
      <div className={styles.writing_area}>
        <textarea placeholder="Write your content here..." id='writing_space' onChange={e => setWriting(e.target.value)} />
      </div>
      {/* Read-only area for displaying the API response */}
      <div className={styles.response_area}>
        <textarea placeholder="AI Response" id='response_space' value={response} readOnly={true} />
      </div>
    </div>
  );
}
