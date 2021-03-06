import { expectationsCardData } from "../Cards/cardsData";
import ExpectationsCards from "./ExpectationsCards";
import faceCupcake from "../../assets/face-cupcake.png";

const Expectations = () => {
  return (
    <section
      className="expect flex flex-col justify-center items-center font-OpenSans text-[#775547] mb-20 xl:mb-40"
      id="delivery"
    >
      <h2 className="text-3xl font-bold italic text-center mb-4 2xl:text-5xl">
        What to expect when you order
      </h2>
      <div className="flex justify-center items-center">
        <ExpectationsCards data={expectationsCardData} />
        <img
          src={faceCupcake}
          alt="purple cupcake with eyes and a mouth and blue icing"
          className="hidden xl:inline-block flex-1 object-contain"
        />
      </div>
    </section>
  );
};

export default Expectations;
