import React from 'react';
import { useState } from 'react';
import './style.css';
import Gallery from './Gallery/gallery';
import { Profile } from './Gallery/gallery.js'
import ToolBar from './Event Handling/button';

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

function SharedStateButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Click Count: {count}</button>
  )
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow({ produce }) {
  const name = produce.stocked ? produce.name :
    <span style={{ color: 'red' }}>
      {produce.name}
    </span>

  return (<tr>
    <td>
      {name}
    </td>

    <td>
      {produce.price}
    </td>
  </tr>
  )
}

function ProductTable({ produce, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  produce.forEach((item) => {
    if (
      item.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !item.stocked) {
      return;
    }
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={item.category} key={item.category} />
      );
    }

    rows.push(
      <ProductRow produce={item} key={item.name} />
    );
    lastCategory = item.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form>
      <input 
      type="text" 
      value={filterText} 
      placeholder="Search..." 
      onChange={(e) => onFilterTextChange(e.target.value)}/>
      <label>
        <input 
        value={inStockOnly} 
        type="checkbox"
        onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

const PRODUCE = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function filterableProductTable({ produce }) {
  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        produce={PRODUCE} />
    </div>
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
      
      {/* Exporting / importing components */}
      <Gallery />

      {/* Using a named export import */}
      <Profile />

      {/* Event Handling button */}
      <ToolBar />
    </>

    
  );
}