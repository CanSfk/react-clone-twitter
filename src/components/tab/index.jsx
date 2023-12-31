import { useEffect, useState } from "react";
import Content from "./content";
import Item from "./item";
import Items from "./items";
import PropTypes from "prop-types";
import { TabContext } from "./context";
import StickyHeader from "../sticky-header";

export default function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = children.filter((c) => c.type === Content);
  const stickyHeader = children.filter((c) => c.type === StickyHeader);

  const content = contents.find((c) => c.props.id === active);

  const data = {
    active,
    setActive,
  };

  return (
    <TabContext.Provider value={data}>
      {stickyHeader}
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired,
};
