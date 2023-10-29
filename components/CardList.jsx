import { SmallCard } from "./SmallCard"
import { LargeCard } from "./LargeCard"
import styles from "./CardList.module.css"

export function CardList({ size, list, showEditButton, onRemoveRecipe }) {
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
                        onRemoveRecipe={onRemoveRecipe} />
                }
            })}
        </div>
    )
}

