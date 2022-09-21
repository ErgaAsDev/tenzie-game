import Dice from "./Dice";
import { useState } from "react";
import Dices from "./Dices";
import { useEffect } from "react";
import React from "react";


function App() {

  const [diceBox, setDiceBox] = useState(Dices)

  function toggle(id){
    // console.log("clicked")
    setDiceBox(prevDiceBox => {
      return prevDiceBox.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }
  

  const diceElements = diceBox.map(dice =>(
  <Dice
    key={dice.id}
    on={dice.on}
    number={dice.number}
    toggle={()=> toggle(dice.id)} 
  />

  ))
  
  const [over, setOver] = useState(false)

  useEffect(() => {
    const firstValue = diceBox[0].number
    const allHeld = diceBox.every(die => die.on)
    const allSameNumber = diceBox.every(die => die.number === firstValue)
    if(allHeld && allSameNumber) {
        setOver(true)
    }
  }, [diceBox])

  function rollDice(){
  if(!over){
    setDiceBox(prevDiceBox => {
      return prevDiceBox.map(roll => {
        if(roll.on){
          return roll
        }else {
          return {...roll, number: Math.floor(Math.random()*8)}
        }
      })
    })
  } else {
      setDiceBox(Dices)
      setOver(false)
    }
  }
// rollDice()

  

  return (
    <div className="app">
      <div className="container">
        <h2>Tenzies</h2>
        <p>Roll until all dice number are the same. Click each die to freeze it at its current value between rolls.</p>
        {/* <Dice diceClicked={clicked} diceColor={colorDice}/> */}
        <div className="dicesBox">
          {diceElements}
        </div>
        <div ></div>
        <button className="btn-roll" onClick={()=> rollDice()}>{over ? "Reset Game" : "Roll"}</button>
      </div>
    </div>
  );
}

export default App;
