import React from 'react';
import { useState } from 'react';
import './style.css';

// Create first component and add a class to it.
function MyButton() {
  const [clicks, setClicks] = useState(0)

  function handleClicking() {
    setClicks(clicks + 1);
  }


  return (<button onClick={handleClicking} className='testClass'>Click Count: {clicks}</button>);
}

// How to use data in a component
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function UserAvatar({ user }) {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}



function AdminPanel() {
  return (<div>
    <p>Admin Panel</p>
  </div>)
}

function LoginForm() {
  return (<p>Please login!</p>)
}
let content;
let isLoggedIn = false;
function DisplayAdminOrLogin() {
  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }
  return (
    <div>
      {content}
    </div>
  )
}

// Create list to be used in component
const products = [
  { title: 'Light Roast Coffee', isKenyanCoffee: true, id: '1' },
  { title: 'Medium Roast Coffee', isKenyanCoffee: true, id: '2' },
  { title: 'Dark Roast Coffee', isKenyanCoffee: false, id: '3' }
];


function BestCoffeeEver() {
  const listItems = products.map(product =>
    <li key={product.id}
      style={{
        color: product.isKenyanCoffee ? 'orange' : 'blue'
      }}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}


// handling events
function EventButton() {
  function handleClick() {
    alert('You clicking me?')
  }

  return (
    <button onClick={handleClick}>
      Click Me :)
    </button>
  )
}

function SharedStateButton({count, onClick}) {
  return (
    <button onClick={onClick}>Click Count: {count}</button>
  )
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      {/* Putting all the logic into a component */}
      <DisplayAdminOrLogin />
      { /*Short circuiting to get the correct component */}
      <div>
        {isLoggedIn && <AdminPanel />}
        {!isLoggedIn && <LoginForm />}
      </div>

      {/* Using stateless pros to create a UserAvatar component */}
      <UserAvatar user={user} />

      {/* Use a list to create a component */}
      <BestCoffeeEver />

      {/* Handle the click of a button */}
      <EventButton />

      {/* Handling state */}
      <h2>Buttons without shared state</h2>
      <MyButton />
      <MyButton />

      {/* Sharing state */}
      <h2>Buttons with shared state</h2>
      <SharedStateButton count={count} onClick={handleClick} />
      <SharedStateButton count={count} onClick={handleClick} />
    </>
  );
}