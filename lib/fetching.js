import { olympians } from "../data/data";

const fetching = async (delay = 0, slug) => {
  const promise = new Promise((resolve, _) => {
    setTimeout(() => {
      const result = olympians.filter((olympian) => {
        return olympian.name === slug;
      });
      resolve(result[0]);
    }, delay);
  });
  const data = await promise;
  return data;
};

export default fetching;
