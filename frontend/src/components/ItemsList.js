import React from 'react'
import SingleitemCard from './SingleitemCard'
import "./menu.css";



const ItemsList = () => {
    const items = [
        {title:"pizza escalope",imgurl:"https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg", prix:50.65,description:"escalope,sauce tomate , mozarilla , olive"},
    {title:"makloub escalope",imgurl:"https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg", prix:50.65,description:"escalope,salade, mozarilla , frit"},
    {title:"gauffre",imgurl:"https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg", prix:50.65,description:"chocolate,mielle ,creme ,glace"},
    {title:"crepe thon ",imgurl:"https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg", prix:50.65,description:"thon,ouef,harisa"}]
  return (
    <div className="itemslist">
      {items.map((item)=>
    <SingleitemCard {...item}/>
    )}
    <button className='storebtn'> Check out Products</button>
    </div>
  )
}

export default ItemsList