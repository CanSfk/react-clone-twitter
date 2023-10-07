import { Posts } from "../../../utils/consts";
import Post from "../../../components/post";
import { WVList } from "virtua";
import { useState } from "react";

export default function ForYou() {
  const [postData, setPostData] = useState(Posts);

  return (
    <WVList
      onRangeChange={(start, end) => {
        if (end + 1 == postData.length)
          setPostData((prev) => [...prev, ...Posts]);
      }}
    >
      {postData.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </WVList>
  );
}
