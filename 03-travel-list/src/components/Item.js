export default function Item({ item, onToggleStatus, deleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={item.packed}
        onChange={() => onToggleStatus(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
