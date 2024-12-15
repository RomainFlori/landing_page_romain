import React, {useState, useEffect} from "react"
import "../../../../../../styles/cards.css"

const Card = ({
  avatar,
  fullname,
  jobtitle,
  time = "Durée: 6 mois",
  year = "2024",
  description,
  about,
  workExperience,
  internship,
  cardId, // Add a unique ID for each card
}) => {
  const [activeSection, setActiveSection] = useState("#about")

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  useEffect(() => {
    const card = document.querySelector(`#${cardId}`) // Select card by unique ID
    const buttons = card.querySelectorAll(".card-buttons button")
    const sections = card.querySelectorAll(".card-section")

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section")
      const section = document.querySelector(targetSection)

      if (card) {
        if (targetSection !== "#about") {
          card.classList.add("is-active")
        } else {
          card.classList.remove("is-active")
        }

        card.setAttribute("data-state", targetSection)

        sections.forEach((s) => s.classList.remove("is-active"))
        buttons.forEach((b) => b.classList.remove("is-active"))

        e.target.classList.add("is-active")
        section.classList.add("is-active")

        // Update state for active section
        setActiveSection(targetSection)
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick)
    })

    return () => {
      // Cleanup event listeners when card is removed
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick)
      })
    }
  }, [cardId]) // Re-run effect when cardId changes

  return (
    <div className="card" id={cardId} data-state={activeSection}>
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
        <img className="card-avatar" alt="img" src={avatar} />
        <h1 className="card-fullname">{fullname}</h1>
        <h2 className="card-jobtitle">{jobtitle}</h2>
      </div>

      <div className="card-main">
        {/* About Section */}
        <div className={`card-section ${activeSection === "#about" ? "is-active" : ""}`} id="about">
          <div className="card-content">
            <div className="card-subtitle">{internship}</div>
            <p className="card-desc">{description}</p>
            <div className="card-desc pt-2">{time}</div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`card-section ${activeSection === "#experience" ? "is-active" : ""}`} id="experience">
          <div className="card-content">
            <div className="card-subtitle">MON EXPERIENCE</div>
            <div className="card-timeline">
              <div className="card-item" data-year={`${year}`}>
                <div className="card-item-title">{workExperience}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="card-buttons">
          <button data-section="#about" className={activeSection === "#about" ? "is-active" : ""} onClick={() => handleSectionChange("#about")}>
            A PROPO
          </button>
          <button data-section="#experience" className={activeSection === "#experience" ? "is-active" : ""} onClick={() => handleSectionChange("#experience")}>
            EXPERIENCE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
