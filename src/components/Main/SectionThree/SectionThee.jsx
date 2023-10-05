import "./SectionThree.css"
import CardsItemOne from "./CardsItem/CardsItemOne"
import CardsItemTwo from "./CardsItem/CardsItemTwo"
import CardsItemThree from "./CardsItem/CardsItemThree"

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <div className="cardsWrapper">
        <CardsItemOne />
        <CardsItemTwo />
        <CardsItemThree />
      </div>
    </section>
  )
}

export default SectionThree;