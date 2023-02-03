import React from "react";
import UserDis from "./UserDis";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = ({ userData }) => {
    return (
        <div className='user_list'>
            {userData.map((User, index) => {
                return (
                    <div>

                    <UserCard
                        key={index}
                        username={User.username}
                        name={User.name}
                        city={User.address.city}
                        street={User.address.street}
                    />
                    <UserDis
                    key={index}
                    catchPhrase={User.company.catchPhrase}
                    username={User.username}
                    name={User.name}
                    city={User.address.city}
                    street={User.address.street}
                    zipcode={User.address.zipcode}
                    phone={User.phone}
                    cname={User.company.name}
                    email={User.email}
                />
                </div>
                );
            })}
        </div>
    );
};

export default UserList;
