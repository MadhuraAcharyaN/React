export default function Stats({ items }) {
  const total = items.length;
  const packedItems = items.filter((i) => i.packed).length || 0;
  const percentageOfPackedItems =
    total === 0 ? 0 : Math.round((packedItems / total) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageOfPackedItems === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${total} items on your list, and you already packed ${packedItems} (${percentageOfPackedItems}%) 👜`}
      </em>
    </footer>
  );
}
