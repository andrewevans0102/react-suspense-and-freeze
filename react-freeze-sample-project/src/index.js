import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// this was copied from https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js:0-1585

import "./styles.css";
import { fetchUser, fetchProfileData } from "./fakeApi";
import { Freeze } from "react-freeze";

const resource = fetchProfileData();

function ProfilePage() {

  const [profileResponse, setProfileResponse] = useState(null);
  const [postsResponse, setPostsResponse] = useState(null);

  async function callService() {
    setProfileResponse(null);
    setPostsResponse(null);
    const localProfile = await fetchUser();
    const localPosts = await fetchProfileData();
    setProfileResponse(localProfile);
    setPostsResponse(localPosts);
  }

  useEffect(() => {
   callService();
  }, [])


  return (
    profileResponse === null ?  
      <h1>Loading profile...</h1> :
      <>
        <button onClick={() => callService()}>refresh</button>
        <Freeze freeze={profileResponse === null}>
          <ProfileDetails user={profileResponse} />
          { postsResponse === null ?
            <h1>Loading posts...</h1> :
            <Freeze freeze={postsResponse === null}>
              <ProfileTimeline posts={postsResponse} />
            </Freeze>
          }
        </Freeze>  
      </>
  );
}

function ProfileDetails({user}) {
  // Try to read user info, although it might not have loaded yet
  return <h1>{user.name}</h1>;
}

function ProfileTimeline({posts}) {
  // Try to read posts, although they might not have loaded yet
  return (
    <ul>
      {posts.map(post => (
        <li key={post}>{JSON.stringify(post)}</li>
      ))}
    </ul>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
