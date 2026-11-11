import "./GridOverlay.css";

export default function CssGridOverlay() {
  return (
    <div className="myGrid">
      <div className="myGrid__image"></div>
      <div className="myGrid__content">
        <div className="content__text">
          <p>Title</p>
          <p>Subtitle</p>
        </div>
      </div>
    </div>
  );
}
