import HeroImg from "./hero/HeroImg";
import Text from "./hero/Text";
import cardsData from "../data/data";
import CardSection from "./cards/CardSection";

const Main = () => {
  const cardInfo = cardsData.map((item) => {
    return ( <CardSection key={item.id} {...item}   />
    );
  });

  return (
    <main>
      <section>
        <HeroImg />
        <Text />
      </section>
      <section className="cards">{cardInfo}</section>
    </main>
  );
};
export default Main;
