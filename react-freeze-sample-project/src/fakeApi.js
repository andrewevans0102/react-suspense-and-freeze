// this was copied from https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js:0-1585

export function fetchProfileData() {
    let userPromise = fetchUser();
    let postsPromise = fetchPosts();

    return Promise.all([userPromise, postsPromise]);
  }
  
  export function fetchUser() {
    console.log("fetch user...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("fetched user");
        resolve({
          name: "Ringo Starr"
        });
      }, 1000);
    });
  }
  
  export function fetchPosts() {
    console.log("fetch posts...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("fetched posts");
        resolve([
          {
            id: 0,
            text: "I get by with a little help from my friends"
          },
          {
            id: 1,
            text: "I'd like to be under the sea in an octupus's garden"
          },
          {
            id: 2,
            text: "You got that sand all over your feet"
          }
        ]);
      }, 1100);
    });
  }
  