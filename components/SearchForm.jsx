import styles from "./SearchForm.module.css"
import { useState } from "react"

export function SearchForm({ setCurrentSearch, currentSearch}) {
    const [search, setSearch] = useState('')
    return (
        <input
            value={currentSearch}
            className={styles.searchform}
            type="text"
            placeholder="Pesquisa por bebida ou ingrediente"
            onChange={e => {
                const { value } = e.target
                setCurrentSearch(value)
            }}
        >
        </input>
    )
}