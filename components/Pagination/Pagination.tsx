import { FC } from "react";
import styles from "./pagination.module.css";
interface Props {
  numberPages: number;
  currentPage: number;
  nextPage: Function;
  prewPage: Function;
  getPaginationGroup: Function;
  changePage: Function;
}
const Pagination: FC<Props> = ({
  currentPage,
  numberPages,
  nextPage,
  prewPage,
  getPaginationGroup,
  changePage,
}) => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.buttonContainer}>
        <button
          disabled={currentPage <= 1 ? true : false}
          onClick={() => prewPage()}
        >
          {"<"}
        </button>
      </div>
      {getPaginationGroup().map((pageNumber: any, index: any) =>
        numberPages > index ? (
          <div
            key={index}
            className={`${styles.buttonContainer} ${
              currentPage === pageNumber ? styles.active : null
            }`}
          >
            <button key={index} onClick={(e) => changePage(e)}>
              {pageNumber}
            </button>
          </div>
        ) : (
          ""
        )
      )}
      <div className={styles.buttonContainer}>
        <button
          disabled={currentPage >= numberPages ? true : false}
          onClick={() => nextPage()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
