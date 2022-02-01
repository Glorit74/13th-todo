import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const dummyPosts = [
  {
    title: 'title1',
    postText: 'text1',
    date: '2022.02.01',
  },
  {
    title: 'title2',
    postText: 'text2',
    date: '2022.02.02',
  },
  {
    title: 'title3',
    postText: 'text3',
    date: '2022.02.03',
  },
];

function App() {
  const [posts, setPosts] = useState(dummyPosts);
  const add = () => {
    setPosts(
      //ha itt elhagyjuk a [],akkor map is not function error
      [
        ...posts,
        {
          title: 'Random5',
          postText: 'text5',
          date: new Date().toLocaleDateString(),
        },
      ]
    );
  };
  return (
    <div className='App'>
      <h1>Post Blog</h1>
      <div>
        <input type='text' placeholder='title' />
        <input type='text' placeholder='post' />
        <button onClick={add}>New post</button>
        <button onClick={() => setPosts([])}>Delete all</button>
      </div>

      {posts.map((post, index) => (
        <div key={index}>
          <h2 className='title'>{post.title}</h2>
          <p className='postText'>{post.postText}</p>
          <p className='date'>{post.date}</p>

          <div>
            <input type='text' placeholder='new text' />
            <input type='text' placeholder='new post' />
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
