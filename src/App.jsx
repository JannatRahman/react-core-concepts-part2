import Counter from './counter';
import Batsman from './batsman' ;
import Users from './users';
import Friends from './friends';
import Post from './post';
import Fruit from './fruit';

import './App.css'
import { useState } from 'react';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//  .then(res => res.json());


// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// } 

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  
    const [show, setShow] = useState(false);
  
    

  // const friendsPromise = fetchFriends();
  const postPromise = fetchPost();
  
  function handleClick() {
    alert('I am Clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3.')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    
    
    <>

 <div>
    <h1>React Core</h1>
    <Fruit></Fruit>

  
    {/* <Suspense fallback={<h4>Posts are coming....</h4>}>
    <Post postPromise={postPromise}></Post>
    </Suspense> */}

    {/* <Suspense fallback={<h3>Loading...</h3>}> 
      <Users fetchUsers = {fetchUsers}></Users>
    </Suspense> */}

    {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense> */}

    <Batsman></Batsman>
    <Counter></Counter>


      <button onClick={handleClick}>Click me</button>

      <button onClick={ function handleClick2(){
        alert('clicked 2')
      }}>Click me2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('click 4')}>Click Me 4</button> 

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
 </div>

    </>
     

      

      
  )
}

export default App
