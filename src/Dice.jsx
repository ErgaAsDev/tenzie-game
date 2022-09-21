import React from 'react'

const Dice = (props) => {
  const styles = {
    backgroundColor: props.on ? "#42FFFF" : "#FFFFFF"
}
  return (
    <div className='dices'
    id='die'
    style={styles}
    onClick={props.toggle}>
    {props.number}
    </div>
  )
}

export default Dice