import * as styles from './searchinput.css'

const SearchInput = () => {

    return(
        <>
            <div className={styles.searchInput}>
                <input type="text" placeholder="Search..." className={styles.inputStyle} />
                <button className={styles.buttonStyle}>Search</button>
            </div>          
        </>
    )

}

export default SearchInput;