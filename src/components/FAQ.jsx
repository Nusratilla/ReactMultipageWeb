import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FAQ = ({question, answer}) => {
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq-icon">
          <FaPlus />
        </button>
      </div>
      <p>
        {answer}
      </p>
    </article>
  )
}

export default FAQ