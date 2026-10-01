export default function Button({ href, children, variant = "outline", external = false, onClick }) {
  const cls = `btn btn--${variant}`;
  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <a
      className={cls}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
