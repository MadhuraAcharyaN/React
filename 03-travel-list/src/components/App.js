import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];
export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(description, quantity) {
    setItems((preItems) => {
      return [
        ...preItems,
        { description, quantity, packed: false, id: preItems.length + 1 },
      ];
    });
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggle}
        deleteItem={handleDeleteItem}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
