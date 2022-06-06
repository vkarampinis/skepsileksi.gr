import Link from "next/link";
import H from "./H";

const MDXComponents = {
  p: (props) => <p {...props} />,
  a: (props) => <Link {...props} />,
  h1: (props) => <H size={1} {...props} />,
  h2: (props) => <H size={2} {...props} />,
  h3: (props) => <H size={3} {...props} />,
  h4: (props) => <H size={4} {...props} />,
};

export default MDXComponents;
