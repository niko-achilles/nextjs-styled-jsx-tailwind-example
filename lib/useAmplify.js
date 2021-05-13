import Amplify from "aws-amplify";

export const useAmplify = () => {
  const config = {
    Auth: {
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
      region: process.env.NEXT_PUBLIC_REGION,
    },
    endpoints: [
      {
        name: process.env.NEXT_PUBLIC_NAME,
        endpoint: process.env.NEXT_PUBLIC_ENDPOINT_LUMIGO,
        region: process.env.NEXT_PUBLIC_REGION_LUMIGO,
      },
    ],
  };
  Amplify.configure(config);
};
