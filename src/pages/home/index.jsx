import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";
import ForYou from "./for-you";

export default function Home() {
  return (
    <>
      <Tab activeTab="forYou">
        <StickyHeader title="Home">
          <Tab.Items>
            <Tab.Item id="forYou">For you</Tab.Item>
            <Tab.Item id="followings">Following</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="forYou">
          <ForYou />
        </Tab.Content>
        <Tab.Content id="followings">Content 2</Tab.Content>
      </Tab>
    </>
  );
}
