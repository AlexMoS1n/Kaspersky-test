import { IData_SnippetNews } from "./types";
import styles from './SnippetNews.module.scss';
import clsx from "clsx";
import { useState, useMemo } from "react";
import HighlightedText from "../HighlightedText/HighlightedText";
import { FormatDate } from "../FormatDate/FormatDate";
import DuplicateNews from "../DuplicateNews/DuplicateNews";

export function SnippetNews(snippetNewsProps: IData_SnippetNews) {
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [showAllDuplicates, setShowAllDuplicates] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);

  const visibleTags = showAllTags ? snippetNewsProps.KW : snippetNewsProps.KW.slice(0, 6);
  const hiddenTagsCount = snippetNewsProps.KW.length - 6;
  const shouldShowButton = !showAllTags && snippetNewsProps.KW.length > 6;
  const traffic = snippetNewsProps.TRAFFIC.map((item, index) => (
    <span key={index}>{item.value} <span className={styles.textImportant}>{Math.round(item.count*100)}% </span></span>)
  );

  const tags = visibleTags.map((tag, index) => (
    <span key={index} className={styles.tag}>
      {tag.value} {tag.count}
    </span>
  ));

  const visibleHighlights = showAllHighlights ? snippetNewsProps.HIGHLIGHTS : snippetNewsProps.HIGHLIGHTS.slice(0, 2);
  const shouldShowHighlightsButton = !showAllHighlights && snippetNewsProps.HIGHLIGHTS.length > 2;
  const contentText = visibleHighlights.map((highlight, index) => (
    <p key={index} className={styles.about_short}>
      <HighlightedText text={highlight} />
    </p>
  ));

  const sortedDuplicates = useMemo(() => {
    if (!sortByDate) return snippetNewsProps.DUPLICATES;
    return [...snippetNewsProps.DUPLICATES].sort((a, b) => 
      new Date(b.time).getTime() - new Date(a.time).getTime()
    );
  }, [snippetNewsProps.DUPLICATES, sortByDate]);

  const visibleDuplicates = showAllDuplicates 
    ? sortedDuplicates 
    : sortedDuplicates.slice(0, 1);

  const duplicateNews = visibleDuplicates.map(item => (
    <DuplicateNews {...item} key={item.id} />
  ));

  const arrowMoreLessText = (
    (!showAllHighlights)?(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowMoreLessText}><path fill-rule="evenodd" d="M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.342-2.924a1 1 0 0 1 1.316 1.506l-4 3.5a1 1 0 0 1-1.316 0l-4-3.5a1 1 0 0 1-.095-1.411" clip-rule="evenodd"></path></svg>)
    :(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowMoreLessText}><path fill-rule="evenodd" d="M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412" clip-rule="evenodd"></path></svg>)
  );

  const arrowSortNews = (
    (!sortByDate)?(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowSortNews}><path fill-rule="evenodd" d="M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.342-2.924a1 1 0 0 1 1.316 1.506l-4 3.5a1 1 0 0 1-1.316 0l-4-3.5a1 1 0 0 1-.095-1.411" clip-rule="evenodd"></path></svg>)
    :(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowSortNews}><path fill-rule="evenodd" d="M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412" clip-rule="evenodd"></path></svg>)
  );

  const arrowViewNews = (
    (!showAllDuplicates)?(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowSortNews}><path fill-rule="evenodd" d="M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.342-2.924a1 1 0 0 1 1.316 1.506l-4 3.5a1 1 0 0 1-1.316 0l-4-3.5a1 1 0 0 1-.095-1.411" clip-rule="evenodd"></path></svg>)
    :(<svg width="14" height="14" viewBox="0 0 14 14" className={styles.arrowSortNews}><path fill-rule="evenodd" d="M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412" clip-rule="evenodd"></path></svg>)
  )

	return (
		<section className={styles.news_block}>
        <div className={styles.statistics}>
          <span className={styles.statistics__data}><FormatDate dateStr={snippetNewsProps.DP} /></span>
          <span className={styles.statistics__reach}><span className={styles.textImportant}>{snippetNewsProps.REACH} </span>Reach</span>
          <div className={styles.statistics__traffic}>
            <span>TOP Traffic: </span>
            {traffic}
          </div>
          <div className={styles.statistics__sent}>
            <span className={clsx(styles.statistics__sent__reaction,(snippetNewsProps.SENT.toLowerCase()==='positive')?styles.statistics__sent__reaction_positive:styles.statistics__sent__reaction_negative)}>{snippetNewsProps.SENT}</span>
            <span className={styles.statistics__sent__info}>i</span>
            <span className={styles.statistics__sent__window}></span>
          </div>
      </div>
      <h2 className={styles.title}>{snippetNewsProps.TI}</h2>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src="src/assets/url.png" alt="Иконка URL" /></div>
          <a href={snippetNewsProps.DOM}> {snippetNewsProps.DOM} </a>
        </div>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src={`src/assets/countries/${snippetNewsProps.CNTR_CODE}.png`} alt="Флаг страны" /></div>
          <span>{snippetNewsProps.CNTR}</span>
        </div>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src="src/assets/lang.png" alt="Иконка Книги" /></div>
          <span>{snippetNewsProps.LANG}</span>
        </div>
        <div className={styles.info__item}>
          <div className={styles.wrapper_image}> <img src="src/assets/author.png" alt="Иконка Человека" /></div>
          <span>{snippetNewsProps.AU}</span>
        </div>
      </div>
      <div className={styles.content}>
        {contentText}
        {shouldShowHighlightsButton && (
          <span 
            onClick={() => setShowAllHighlights(true)} 
            className={styles.linkMoreLess}
          >
            Show more
            {arrowMoreLessText}
          </span>
        )}
        {showAllHighlights && (
          <span 
            onClick={() => setShowAllHighlights(false)} 
            className={styles.linkMoreLess}
          >
            Show less
            {arrowMoreLessText}
          </span>
        )}
      </div>
      <div className={styles.tags}>
        {tags}
        {shouldShowButton && (
        <span className={styles.linkMoreLess} onClick={() => setShowAllTags(true)}>
          Show all (+{hiddenTagsCount})
        </span>
      )}
      </div>
      <div className={styles.source}>
        <a href={snippetNewsProps.URL} className={styles.original_url}>
          Original Source  
        </a>
      </div>
      <div className={styles.control_news_blocks}>
        <span>
          Duplicates: <span className={styles.textImportant}>{snippetNewsProps.DUPLICATES.length}</span>
        </span>
        <span 
          className={styles.sortLink}
          onClick={() => setSortByDate(!sortByDate)}
        >
          By Relevance {arrowSortNews}
        </span>
      </div>
      <div className={styles.news_blocks}>
        {duplicateNews}
        {!showAllDuplicates && snippetNewsProps.DUPLICATES.length > 1 && (
          <span 
            className={styles.viewDuplicatesLink}
            onClick={() => setShowAllDuplicates(true)}
          >
            {arrowViewNews} View Duplicates
          </span>
        )}
        {showAllDuplicates && snippetNewsProps.DUPLICATES.length > 1 && (
          <span
            className={styles.viewDuplicatesLink}
            onClick={() => setShowAllDuplicates(false)}
          >
            {arrowViewNews} Hide Duplicates
          </span>
        )}
      </div>
		</section>
  )
}

