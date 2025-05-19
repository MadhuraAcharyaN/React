import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onToggleItem,
  deleteItem,
  clearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedList = [];
  if (sort === "input") {
    sortedList = items;
  } else if (sort === "description") {
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sort === "packed") {
    sortedList = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onToggleStatus={onToggleItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by status</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}
