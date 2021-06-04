import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router";
import MyBlogs from "./MyBlogs";
import Users from "./Users";
import UserTable from "./UserTable";

const Profile = () => {
  const { userId } = useParams();
  console.log("🚀 ~ file: Profile.jsx ~ line 10 ~ Profile ~ userId", userId);
  const [key, setKey] = useState("blogs");

  return (
    <div className="">

    { userId == 2 ?  <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="blogs" title="Blogs">
          <MyBlogs id={userId} />
        </Tab>
          <Tab eventKey="users" title="Users">
            <UserTable />
          </Tab>
        
      </Tabs> : <MyBlogs id={userId}/>}
    </div>
  );
};

export default Profile;
