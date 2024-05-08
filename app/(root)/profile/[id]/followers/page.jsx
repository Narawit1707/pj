"use client"

import ProfileCard from "@components/cards/ProfileCard";
import UserCard from "@components/cards/UserCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Followers = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return(
    <div className="flex flex-col gap-9">
      <ProfileCard userData={userData} activeTab="Followers" />

      <div className="flex flex-col gap-9">
        {userData?.followers?.map((person) => (
          <UserCard key={person._id} userData={person} update={getUser}/>
        ))}
      </div>
    </div>
  );
};

export default Followers;
