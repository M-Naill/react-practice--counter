function Buttons({ setCounter, counter }) {
  const increase = () => { setCounter(counter + 1) }
  const decrease = () => { setCounter(counter - 1) }

  return (
    <div>
      <button onClick={increase} class="button">+</button>
      <button onClick={decrease} class="button">-</button>
    </div>

  )

};


export default Buttons