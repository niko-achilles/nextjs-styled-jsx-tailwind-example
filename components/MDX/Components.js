import Link from "next/link";
import test from "./Test";
import { Counter } from "./Counter";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Components = {
  a: CustomLink,
  test,
  Counter,
};

export default Components;
