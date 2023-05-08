import { Card } from "../../../components/Card/Card";
import styles from "./Cards.module.css";

export const Cards = ({ items = [] }) => {
  const content =
    items.length > 0 ? (
      items.map((_) => {
        const cardProps = {
          name: _.name,
          author: _.owner.login,
          language: _.language,
          desc: _.description,
          stars: _.stargazers_count,
          watchers: _.watchers_count,
        };
        return <Card key={_.id} {...cardProps} />;
      })
    ) : (
      <p className={styles.CardsNotFound}>По Вашому запиту не знайдено жодного репозиторія</p>
    );

  return <div className={styles.Cards}>{content}</div>;
};
