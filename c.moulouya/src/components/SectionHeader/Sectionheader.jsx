import "./SectionHeader.css";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="sh-wrapper">

      {/* Décoration haut */}
      <div className="sh-deco sh-deco-top">
        <span className="sh-deco-line sh-red sh-long" />
        <span className="sh-deco-line sh-red sh-medium" />
        <span className="sh-deco-line sh-red sh-medium" />
        <span className="sh-deco-line sh-red sh-long" />
      </div>

      {/* Titre */}
      <h2 className="sh-title">{title}</h2>

      {/* Sous-titre */}
      {subtitle && <p className="sh-subtitle">{subtitle}</p>}

      {/* Décoration bas */}
      <div className="sh-deco sh-deco-bottom">
        <span className="sh-deco-line sh-red sh-long" />
        <span className="sh-deco-line sh-red sh-medium" />
        <span className="sh-deco-line sh-red sh-medium" />
        <span className="sh-deco-line sh-red sh-long" />
      </div>

    </div>
  );
}