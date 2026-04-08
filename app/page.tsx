import React from 'react'

const Home = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()+1
  const year = today.getFullYear()
 const dateString = day + "/" + month + "/" + year;
  return (
    <div>
      <h1>Hi, I am Sahil</h1>
      <p>Today's date is: {dateString}</p>
    </div>
  );
}

export default Home;