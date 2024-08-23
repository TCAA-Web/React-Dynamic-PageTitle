import style from "./Wrapper.module.scss";

export const Wrapper = ({ title, subtitle, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <main className={style.wrapperStyle}>{children}</main>
    </>
  );
};
