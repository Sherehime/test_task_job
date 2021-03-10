import "./Game.css";

function CardView(props) {
  const imPath = `${window.location.href}/images/${props.image}.jpg`;
  const backPath = `${window.location.href}/images/cover.jpg`;

  let className = "Card flip-card";
  if (props.matched) {
    className = className + " Matched";
  }
  const classNameWithAnimation = className + " animate";

  return (
    <div
      onClick={() => {
        if (!props.matched && !props.imageUp) {
          props.onClick(props.id);
        }
      }}
      className={props.imageUp ? classNameWithAnimation : className}
    >
      <div className="cardInner">
        <div className="flip-card-front">
          <img src={`${backPath}`} draggable="false" alt="" />
        </div>
        <div className="cardBack">
          <img src={`${imPath}`} draggable="false" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardView;
