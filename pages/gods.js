import fetching from "../components/OlympianGods/fetching";

const Gods = ({ response: gods }) => {
  return (
    <div>
      <h1>Olympian Gods</h1>
      {gods.map((god) => {
        return (
          <p className="p__god--blue" key={god.id}>
            {god.name} : {god.capability}
          </p>
        );
      })}

      <style jsx>
        {`
          h1 {
            font-size: 2.5rem;
            font-weight: bold;
          }
          .p__god--blue {
            @apply text-2xl font-bold text-left text-blue-500;
          }
        `}
      </style>
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

export default Gods;
