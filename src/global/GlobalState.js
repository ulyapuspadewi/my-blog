import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { baseURL } from "../utils/url";

function GlobalState(props) {

  const [posts, setPosts] = useState([]);
  const [postsDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const res = await axios.get('/data.json');
      const res = await axios.get(`${baseURL}/api/recipes`)
      setPosts(res.data.results);
      setLoading(false);
      console.log(res);
    };
    
    fetchPosts();
  }, []);

  const states = { posts, postsDetails };
  const setters = { setPosts };

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;
