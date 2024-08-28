import mime from "mime-types";

export default function ArticleImage({ image, source, className = "" }) {
  return (
    <div>
      {image && (
        <picture className={className}>
          {image.multipleSizesWebp && (
            <source
              srcSet={image.multipleSizesWebp.srcSet}
              src={image.multipleSizesWebp.src}
              alt={image.name}
              type={mime.lookup(image.multipleSizesWebp.src)}
            />
          )}
          {image.multipleSizes && (
            <source
              srcSet={image.multipleSizes.srcSet}
              src={image.multipleSizes.src}
              alt={image.name}
              type={mime.lookup(image.multipleSizes.src)}
            />
          )}
          <img
            src={image.name}
            alt={image.name}
            className={`my-0 ${className}`}
          />
        </picture>
      )}
      {source && (
        <div className="py-2 text-sm text-left text-slate-400 ">
          Source:{" "}
          {source.startsWith("http") ? (
            <a
              className="no-underline text-slate-400 hover:text-slate-400"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              {new URL(source).hostname.replace("www.", "").replace(".com", "")}
            </a>
          ) : (
            <span>{source}</span>
          )}
        </div>
      )}
    </div>
  );
}
