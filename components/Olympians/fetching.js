import { olympians } from "./data/data";

const fetching = async (delay = 0) => {
  const promise = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(olympians);
    }, delay);
  });
  const data = await promise;
  return data;
};

export default fetching;
