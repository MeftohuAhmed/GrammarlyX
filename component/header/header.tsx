import styles from './header.module.css'

/**
 * The Header component renders the page header.
 * It currently displays a static title but can be expanded to include more elements.
 */
export default function Header() {
  // JSX structure for the header component
  return (
    <div className={styles.page_header}>
      {/* Static title for the header */}
      <span>GrammarlyX</span>
    </div>
  );
}
