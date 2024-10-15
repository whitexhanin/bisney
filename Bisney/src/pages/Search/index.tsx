import * as styles from './styles.css'

const Search  = () => {
    return (
        <>
            <div className={styles.searchInput}>
                <input type="text" placeholder="Search..." className={styles.inputStyle} />
                <button className={styles.buttonStyle}>Search</button>
            </div>    
        </>
    )
}

export default Search;