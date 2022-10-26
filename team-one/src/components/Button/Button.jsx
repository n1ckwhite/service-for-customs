import stylesButton from "./Button.module.css";
export const Button = ({ children, img, type, width, direction_img }) => {
  const classNames = require("classnames");
  const buttonBgColor =
    type === "primary"
      ? stylesButton.button_primary
      : type === "secondary"
      ? stylesButton.button_secondary
      : type === "transparent"
      ? stylesButton.button_transparent
      : "";
  const buttonWidth =
    width === 180
      ? stylesButton.button_180
      : width === 166
      ? stylesButton.button_166
      : width === 170
      ? stylesButton.button_170
      : width === 48
      ? stylesButton.button_48
      : "";
  const directionImg = direction_img === "left" ? stylesButton.img_left : "";

  return (
    <button
      className={classNames(stylesButton.button, buttonBgColor, buttonWidth)}
    >
      <p className={stylesButton.text}>{children}</p>
      {img ? (
        <div className={classNames(stylesButton.img, directionImg)}>
          <img src={img} alt="icon" />
        </div>
      ) : (
        ""
      )}
    </button>
  );
};
