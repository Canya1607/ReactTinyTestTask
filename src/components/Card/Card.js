import styles from "./Card.module.css";
import CardDefaultImg from "../../assets/images/card-default.png";
import { ReactComponent as StarSvg } from "../../assets/images/star.svg";
import { ReactComponent as PersonSvg } from "../../assets/images/person.svg";

export const Card = ({name, author, language, desc, stars, watchers}) => (
  <div className={styles.Card}>
    <img className={styles.CardImage} src={CardDefaultImg} alt="card-img" />
    <div className={styles.CardRepoInfo}>
      <p className={styles.CardRepoName}>{name}</p>
      <p className={styles.CardRepoAuthor}>{author}</p>
      <p className={styles.CardRepoLang}>{language}</p>
      <p className={styles.CardRepoDesc}>{desc}</p>
    </div>
    <div className={styles.CardRepoStats}>
      <div className={styles.CardRepoStatsRow}>
        <div className={styles.CardSvgWrapper}>
          <StarSvg />
        </div>
        <p className={styles.CardRepoStatsInfo}>
          {stars} <span>stars</span>
        </p>
      </div>
      <div className={styles.CardRepoStatsRow}>
        <div className={styles.CardSvgWrapper}>
          <PersonSvg />
        </div>
        <p className={styles.CardRepoStatsInfo}>{watchers} watchers</p>
      </div>
    </div>
  </div>
);
