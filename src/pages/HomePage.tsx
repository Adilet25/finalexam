import MainSection from "../components/sections/mainSection/MainSection";
import VacanPage from "./VacanPage";

type Props = {};

const HomePage = (_props: Props) => {
  return (
    <div>
      <MainSection />
      <VacanPage />
    </div>
  );
};

export default HomePage;
