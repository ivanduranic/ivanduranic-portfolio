import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route exact component={SinglePost} path="/post/:slug" />
        <Route exact component={Post} path="/post" />
        <Route exact component={Project} path="/project" />
        <Route exact component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
