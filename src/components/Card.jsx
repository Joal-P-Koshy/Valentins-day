import React from 'react'
import './card.css'
import { Link } from '@material-ui/core';

function Card({ value }) {

  const handleYes = () => {
    document.getElementById("qstn").innerHTML = `Hey ${value} ! Congratulations. You got a perfect partner.`;
  }

  const moveHover = () => {
    const change = document.querySelector("button.btn-no");
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    change.style.left = i + "px";
    change.style.top = j + "px";
  }


  return (
    <>
      <div className="box">
        <div className="inside">
          <div className="symbol">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWs4bWNvN3R3bnA4NjE3M3NvbTh0N250YTgzdnJwZG90d2Z0OGh0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lgPVnjdVYshd8MfhYR/giphy.gif" alt="logo(Love)" />
          </div>
          <div className="">
            <h2 id='qstn'>{value}  Will you be my Valentine ?</h2>
          </div>
          <div className="">
            <button className="btn-yes" onClick={handleYes}><i class="fa-regular fa-heart me-2"></i>Yes</button>
            <button className="btn-no" onMouseOver={moveHover}>No..</button>
          </div>
        </div>
      </div>
      <p className="">&copy; Built with React 2024, All Rights Reserved &reg; Joal P Koshy</p>
    </>
  )
}

export default Card