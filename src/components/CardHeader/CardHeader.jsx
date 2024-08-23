import style from "./CardHeader.module.scss";

export const CardHeader = ({ text }) => {
  return (
    <div className={style.cardHeaderStyle}>
      <h4>{text ? text : "Ingen tekst fundet"}</h4>
      <span></span>
    </div>
  );
};
