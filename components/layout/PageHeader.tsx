type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`mx-auto max-w-4xl text-center ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cyan-300 sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
