import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './posts';

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
        const result =  await axios("http://django-reactjs-crud.herokuapp.com/api/posts-list/");
        setPosts(result.data);
      };
    fetchData();
  }, [posts]);

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const submit = (e) => {
    e.preventDefault();

    var csrftoken = getCookie('csrftoken');
    var url = 'http://django-reactjs-crud.herokuapp.com/api/post-create/';

    if(editing === true){
      url = `http://django-reactjs-crud.herokuapp.com/api/post-update/${active.id}/`;
      setEditing(false);
    }

    fetch(url, {
      method: 'POST',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify({title, text})
    }).then((res) => {
        setTitle('');
        setText('');
    }).catch((error) => {
      console.log('ERROR:', error);
    })
  }

  const postDelete = (post) => {

    var csrftoken = getCookie('csrftoken');
    fetch(`http://django-reactjs-crud.herokuapp.com/api/post-delete/${post.id}/`, {
      method: 'DELETE',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken,
      }
    })
  }

  const updatePost = (post) => {
    setActive(post);
    setEditing(true);
    setTitle(post.title);
    setText(post.text);
  }

  return (
    <div id="top" className="App">
      <div className="app__content">
        <div className="app__header">
          <h1>Post app</h1>
        </div>
          <div className="post__formbase">
            <form onSubmit={submit}>
              <label for="title">Title</label>
              <input 
                type="text" 
                id="title"
                name="title" 
                placeholder="Title" 
                onChange={event => setTitle(event.target.value)}
                value={title}
                required
              />

              <label for="text">Text</label>
              <textarea 
                rows="5" 
                cols="25" 
                id="text"
                name="text"
                placeholder="Text"
                onChange={event => setText(event.target.value)}
                value={text}
                required
              ></textarea>
              <div className="b">
                <button className="submitButton" type="submit">Post</button>
              </div>
            </form>
        </div>
      </div>

      {
        posts.length === 0 ? (<div className="post__header"><h2>No post.</h2></div>) : (
        <div className="post__header">
          <h2>Posts</h2>
        </div>)
      }
      {posts.map(post => (
        <Posts id={post.id} title={post.title} text={post.text} postDelete={() => postDelete(post)} postUpdate={() => updatePost(post)} />
      ))}

      <a href="#top" className="toTopButton">UP</a>
    </div>
  );
}


export default App;