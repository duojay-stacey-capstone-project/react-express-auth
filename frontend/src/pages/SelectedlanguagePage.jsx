
import React, { useState, useEffect } from "react";

export default function SelectedLanguagePage() {
  const [quizTopic, setQuizTopic] = useState([]);

  useEffect(() => {
    fetch("/api/q")
      .then(response => response.json())
      .then(data => {
        console.log("question data", data);
        setQuizTopic(data); 
      })
      .catch(error => console.error(error));
  }, []);

  console.log("quiz array data", quizTopic);

  const handleLanguageClick = (languageId) => {
    console.log(languageId)
    fetch(`/api/question/${languageId}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Language ${languageId} data`, data);
        // Perform any necessary processing with the fetched data
      })
      .catch(error => console.error(error));
  };
  {/* {quizTopic.map(language => (
    <button key={language.id} className="button-52" onClick={() => handleLanguageClick(language.id)}>
      {language.topic}
    </button>
  ))} */}
  return (
    <>
      <div className="top-center-container">
        <h1>Selected language Page</h1>
      <div className="button-container">
        <button className="button-52">Hello</button>
        <div className="diagonal-line"></div>
        <button className="button-52">Hello</button>
        <div className="diagonal-line"></div>
        <button className="button-52">Hello</button>
      </div>
      </div>
    </>
  );
}
