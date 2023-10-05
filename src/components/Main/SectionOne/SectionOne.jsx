import image1 from "../../../assets/miniCardsFoto/image1.jpg"
import image2 from "../../../assets/miniCardsFoto/image2.jpg"
import image3 from "../../../assets/miniCardsFoto/image3.jpg"
import image4 from "../../../assets/miniCardsFoto/image4.jpg"
import image5 from "../../../assets/miniCardsFoto/image5.jpg"
import image6 from "../../../assets/miniCardsFoto/image6.jpg"
import image7 from "../../../assets/miniCardsFoto/image7.jpg"
import image8 from "../../../assets/miniCardsFoto/image8.jpg"
import image9 from "../../../assets/miniCardsFoto/image9.jpg"
import "./SectionOne.css"



const SectionOne = () => {
  return (
    <section className="sectionOne">
      <div className="blockImage">
        <div className="imageItem imageItemOne"><img src={image1} alt="" /></div>
        <div className="imageItem imageItemTwo">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          </div>
        <div className="imageItem imageItemThree">
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          </div>
        <div className="imageItem imageItemFour">
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          </div>
        <div className="imageItem imageItemFive">
          <img src={image8} alt="" />
          <img src={image9} alt="" />
          </div>
      </div>
    </section>
  )
}

export default SectionOne;