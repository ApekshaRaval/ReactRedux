import React from 'react'

const Header = (props) => {
  return (
    <div>
    <div className="add-cart">
        <span>{props.data.length}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNucTT60xiBdGqxfw0diIjZV6UfE5_F-0fU1z9EDpDabWzJf_JB8s6ozJjhp-LoaJL54&usqp=CAU"></img>
    </div>
</div>
  )
}

export default Header
