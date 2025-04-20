import { FormatDate } from '../FormatDate/FormatDate';
import styles from './DuplicateNews.module.scss';

export type TDuplicateNewsProps = {
  id: number;
  time: string;
  reach: number;
  title: string;
  url: string;
  country_cod: string;
  country: string;
  author: string;
}

export default function DuplicateNews(duplicateNewsProps: TDuplicateNewsProps) {

  return (
    <div className={styles.news}>
      <div className={styles.statistics}>
        <span className={styles.statistics__data}><FormatDate dateStr={duplicateNewsProps.time} /></span>
        <span className={styles.textImportant}>{duplicateNewsProps.reach} Top Reach</span>
        <div className={styles.statistics__sent}>
          <span className={styles.statistics__sent__info}>i</span>
          <span className={styles.statistics__sent__window}></span>
      </div>
      </div>
      <h3 className={styles.title}>{duplicateNewsProps.title}</h3>
      <div className={styles.info}>
      <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src="src/assets/url.png" alt="Иконка URL" /></div>
          <a href={duplicateNewsProps.url}>{duplicateNewsProps.url}</a>
        </div>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src={`src/assets/countries/${duplicateNewsProps.country_cod}.png`} alt="Флаг страны" /></div>
          <span>{duplicateNewsProps.country}</span>
        </div>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src="src/assets/author.png" alt="Иконка Человека" /></div>
          <span>{duplicateNewsProps.author}</span>
        </div>
      </div>
    </div>
  );
};
