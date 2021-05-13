import { useEffect, useState } from "react";

import format from "comma-number";
import { API } from "aws-amplify";

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState();

  useEffect(() => {
    registerView();
  }, [slug]);

  const registerView = async () => {
    try {
      const { views } = await API.post("views", `/dev/views?storyId=${slug}`, {
        headers: { "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY },
        body: {},
      });
   
      setViews(views);
    } catch (error) {
      console.log(error);
    }
  };

  return `${views ? format(views) : "–––"} views`;
}
