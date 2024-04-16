//import "./component/theme-colors.module.css";
import { useState } from "react";
import styles from "./tariffCard.module.css";

export default function useTariffCard({ price, speed, theme, id }) {
  const [checked, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!checked);
  };

  return (
    <label for={id} className={checked ? styles.highlight_card : styles.card}>
      <input
        onClick={handleCheck}
        type="radio"
        name="tarifIndex"
        className={styles.radio_battons}
        id={id}
      />
      <div className={theme}>
        <div
          className={`${styles.tariff_name} ${
            checked ? styles.tariff_name_big : ""
          }`}
        >
          Безлимитный {price}
        </div>
        <div className={styles.tariff_body}>
          <p className={styles.money}>руб</p>
          <p className={styles.price}>{price}</p>
          <p className={styles.period}>/мес</p>
        </div>
      </div>
      <div className={styles.tariff_footer}>
        <div className={styles.tariff_speed}>до {speed} Мбит/сек</div>
        <div className={styles.tariff_rules}>
          Объём включенного трафика не ограничен
        </div>
      </div>
    </label>
  );
}
