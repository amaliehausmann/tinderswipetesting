import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import style from './SwipeCard.module.scss'

export const SwipeCard = () => {
    const [cards, setCards] = useState([{id: 1, question: 'Er du glad?'}, {id: 2, question: 'Er du sjov?'},{id: 3, question: 'Er du sej?'},])
    const swiped = (direction) => {
        console.log(`Swiped ${direction}`);
      };
  return (
    <div className={style.cardContainer}>
        {cards.slice().reverse().map((item)=> (
            <TinderCard key={item.id} className={style.swipe} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir)}>
                <div className={style.card}>
                    <p>{item.id} / {cards.length}</p>
                    <h1>{item.question}</h1>
                </div>
            </TinderCard>
        ))}
    </div>
  )
}