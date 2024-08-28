import Link from "next/link";
import H from "./H";

const MDXComponents = {
  p: (props) => <p {...props} />,
  a: (props) => <Link {...props} legacyBehavior />,
  h1: (props) => <H size={1} {...props} />,
  h2: (props) => <H size={2} {...props} />,
  h3: (props) => <H size={3} {...props} />,
  h4: (props) => <H size={4} {...props} />,
  table: (props) => (
    <table
      className="border border-gray-300 border-solid table-auto"
      {...props}
    />
  ),
  tr: (props) => <tr {...props} />,
  th: (props) => (
    <th className="px-3 py-2 text-center bg-slate-100" {...props} />
  ),
  td: (props) => (
    <td
      className="px-3 text-center border-r border-gray-300 border-solid last:border-r-0"
      {...props}
    />
  ),
};

export default MDXComponents;
