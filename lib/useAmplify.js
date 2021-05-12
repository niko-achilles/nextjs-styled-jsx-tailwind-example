import Amplify from "aws-amplify";

export const useAmplify = () => {
  const config = {
    endpoints: [
      {
        name: process.env.NEXT_PUBLIC_NAME,
        endpoint: process.env.NEXT_PUBLIC_ENDPOINT,
        region: process.env.NEXT_PUBLIC_REGION,
      },
    ],
  };
  Amplify.configure(config);
};
