import fetching from "../components/Olympians/fetching";
import OlympianCard from "../components/Olympians/OlympianCard/OlympianCard";

export const config = {
  amp: false,
};

const Olympians = ({ response: olympians }) => {
  const [zeus, ...rest] = olympians;

  return (
    <div className="antialiased text-gray-900">
      <div className="bg-gray-200 min-h-screen p-8 flex-col justify-center">
        {olympians.map((olympian, i) => {
          return <OlympianCard key={i} olympian={olympian} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const response = await fetching();

  return {
    props: {
      response,
    },
  };
}

export default Olympians;
