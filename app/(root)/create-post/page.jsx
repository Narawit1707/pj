"use client";

import { useUser } from "@clerk/nextjs";
import Posting from "@components/form/Posting";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const { user} = useUser();
  
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const postData = {
    creatorId: userData?._id,
    caption: "",
    tag: "",
    postPhoto: null,
  };

  return(
    <div className="pt-6">
      <Posting post={postData} apiEndpoint={"/api/post/new"} />
    </div>
  );
};

export default CreatePost;
