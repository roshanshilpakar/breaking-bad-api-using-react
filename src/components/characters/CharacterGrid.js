import React from 'react'
import CharacterItem from './Characteritem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (<section className="cards">
        {items.map((item) =>(
            <CharacterItem key={item.char_id} item={item}>
                </CharacterItem>
        ))}
    </section>
    )
}

export default CharacterGrid
