export default function SectionTitle({ eyebrow, title, text, align = 'center', as: Tag = 'h2' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag>{title}</Tag>
      <span className="ornament" aria-hidden="true"><i /></span>
      {text && <p>{text}</p>}
    </div>
  );
}
