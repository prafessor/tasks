import css from "./TransactionHistoryRow.module.css";

export default function TransactionHistoryRow ({ item:{ type, amount, currency } }) {
    return (
        <>
            <td className={css.col}>{type}</td>
            <td className={css.col}>{amount}</td>
            <td className={css.col}>{currency}</td>
        </>
    )
}