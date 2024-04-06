import styles from "./tariffCard.module.css"

export default function tariffCard(props) {
  const theme = props.theme;
    return(
      <div className={`${props.price===550?styles.highlight_card:styles.card}`}>
        <div className={theme.color}>
          <div className={`${styles.tariff_name} ${props.price===550?styles.tariff_name_big:''}`}>Безлимитный {props.price}</div>
          <div className={styles.tariff_body}>
            <p className={styles.money}>руб</p>
            <p className={styles.price}>{props.price}</p>
            <p className={styles.period}>/мес</p>
          </div>
        </div>
        <div className={styles.tariff_footer}>
          <div className={styles.tariff_speed}>до {props.speed} Мбит/сек</div>
          <div className={styles.tariff_rules}>Объём включенного трафика не ограничен</div>
        </div>
      </div>
      
    )
}