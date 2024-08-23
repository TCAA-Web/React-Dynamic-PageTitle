import style from "./CardBody.module.scss";

export const CardBody = ({ children, imageUrl }) => {
  return (
    <div className={style.cardBodyStyle}>
      <img src={imageUrl} alt={"some image"} />
      <p>{children}</p>
    </div>
  );
};
