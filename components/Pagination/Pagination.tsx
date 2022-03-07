import styles from './pagination.module.css';

function Pagination() {
  return (
    <div className={styles.paginationContainer}>
        <div className={styles.buttonContainer}><button>{'<'}</button></div>
        <div className={styles.buttonContainer}><button>1</button></div>
        <div className={styles.buttonContainer}><button>2</button></div>
        <div className={styles.buttonContainer}><button>{'>'}</button></div>
    </div>
  )
}

export default Pagination