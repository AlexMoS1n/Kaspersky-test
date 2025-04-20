import styles from './HighlightedText.module.scss';

type THighlightedTextProps = {
  text: string;
}

function HighlightedText({ text }: THighlightedTextProps) {
  const parts = text.split(/(<kw>.*?<\/kw>)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('<kw>') && part.endsWith('</kw>')) {
          const keyword = part.replace(/<kw>|<\/kw>/g, '');
          return (
            <span key={index} className={styles.tag_word}>
              {keyword}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default HighlightedText;