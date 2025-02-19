export default function Card({ imgSrc, label, width = "auto", height = "auto"}) {
    return (
      <div
        style={{ width, height }}
      >
        <img
          src={imgSrc}
          alt={label || "Image"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  