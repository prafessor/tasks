import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.header}>
          <th className={css.col}>Type</th>
          <th className={css.col}>Amount</th>
          <th className={css.col}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <tr className={css.row} key={el.id}>
            <TransactionHistoryRow item={el} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
