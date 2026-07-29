import TransactionButton from "../transactionButton/TransactionButton";
import styles from "./AccountComponent.module.scss";
function AccountComponent({ account }) {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{account.accountTitle}</h3>
        <p className={styles.accountAmount}>{account.accountAmount}</p>
        <p className={styles.accountAmountDescription}>
          {account.accountAmountDescription}
        </p>
      </div>
      <div className={styles.accountContentWrapperCta}>
        <TransactionButton />
      </div>
    </section>
  );
}

export default AccountComponent;
