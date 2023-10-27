import { SmallCard } from "../SmallCard/SmallCard"
import { LargeCard } from "../LargeCard/LargeCard"
import styles from "./CardList.module.css"

export function CardList({ size, list, showEditButton, pages }) {
    const containerStyle = size === "small" ? styles.cardsGrid : styles.cardsFlex;
    return (
        <div className={containerStyle}>
            {list && list.sort((a, b) => (a.name > b.name) ? 1 : -1).map((drink, i) => {
                if (size === "small") {
                    return <SmallCard drink={drink} key={i} />
                } else {
                    return <LargeCard 
                    drink={drink} key={i}
                    showEditButton={showEditButton} 
                    pages={pages}/>
                    
                }
            })}
        </div>
    )
}

