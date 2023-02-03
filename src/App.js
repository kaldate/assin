import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";

const App = () => {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    useEffect(async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        setUserData(response.data);
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = userData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>Assigment task</h1>
            <UserList userData={currentPosts} />
            <Pagination
                totalPosts={userData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
