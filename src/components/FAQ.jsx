import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)
  return (
    <article className="faq" onClick={()=> setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq-icon">
          {
            isAnswerShowing ? <FaMinus /> : <FaPlus /> 
          }
        </button>
      </div>
      { isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ