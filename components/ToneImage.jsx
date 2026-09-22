export default function ToneImage({ src, alt = "", className = "", tint = true }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {tint && <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />}
    </div>
  );
}
