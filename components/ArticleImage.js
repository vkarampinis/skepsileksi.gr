import mime from "mime-types";

export default function ArticleImage({ name, source, className = "" }) {
  const multipleSizes = require.context(
    "../articles/images?resize",
    false
  )(`./${name}`);
  const multipleSizesWebp = require.context(
    "../articles/images?resize&format=webp",
    false
  )(`./${name}`);

  return (
    <div>
      <picture>
        <source
          srcSet={multipleSizesWebp.srcSet}
          src={multipleSizesWebp.src}
          alt={name}
          type={mime.lookup(multipleSizesWebp.src)}
        />
        <source
          srcSet={multipleSizes.srcSet}
          src={multipleSizes.src}
          alt={name}
          type={mime.lookup(multipleSizes.src)}
        />
        <img src={name} alt={name} className={`my-0 ${className}`} />
      </picture>
      {source && (
        <div className="py-2 text-sm text-left text-slate-400 ">
          Source:{" "}
          <a
            className="no-underline text-slate-400 hover:text-slate-400"
            href={source}
            target="_blank"
            rel="noreferrer"
          >
            {new URL(source).hostname.replace("www.", "").replace(".com", "")}
          </a>
        </div>
      )}
    </div>
  );
}
