import { useState } from "react";

import "./Home.css";

import Login, { Signup } from "./Login";
import Books from "./Books";

function Home() {
  const [signup, setSignup] = useState(false);
  const [Book, setBook] = useState(true);
  const [loggedStatus, setLoggedStatus] = useState(true);

  function updateSignup(e) {
    console.log(e);
    if (e === "login") {
      setSignup(false);
    }else if(e=="logout"){
      setSignup(false);
      setLoggedStatus(false);
      setBook(false);
    }else {
      setSignup((e) => !e);
    }
  }

  function booksPage(e) {
    if (e == "book" && loggedStatus) {
      setBook(true);
    } else if (e === "logged") {
      setBook(true);
      setLoggedStatus(true);
    }

  }

  return (
    <div id="parent">
      <div className="navbar-container">
        <nav>
          <ul className="navbar">
            <li>
              <a
                onClick={() => {
                  booksPage("book");
                }}
              >
                Books
              </a>
            </li>
            <li>
              {loggedStatus ? <a onClick={() => {
                updateSignup("logout");
              }}>Logout</a> : <a onClick={() => {
                updateSignup("login");
              }}>Login</a>}
            </li>
          </ul>
        </nav>
      </div>
      {Book ? <Books /> :
        signup ? (
          <Signup cb={updateSignup} loginCb={booksPage} />
        ) : (
          <Login cb={updateSignup} loginCb={booksPage} />
        )
      }

    </div>
  );
}

export default Home;
