import styles from './FormatDate.module.scss';

type FormatDateProps = {
  dateStr: string 
}

export function FormatDate({dateStr}:FormatDateProps) {
  const date = new Date(dateStr);
  const day = date.getDate().toString();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <>
    <span className={styles.textImportant}>{day} </span>{month} {year}
    </>
  )
}