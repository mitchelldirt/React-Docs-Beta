import React from 'react';
import './style.css';

// Create first component and add a class to it.
function MyButton() {
  return (<button className='testClass'>Hello</button>);
}

function Button() {
  return (
    <div>
      <MyButton />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
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



export default function Profile() {
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
    </>
  );
}