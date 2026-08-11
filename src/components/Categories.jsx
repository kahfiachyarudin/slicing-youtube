const items = [
  "All",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "Item",
  "Item",
  "Item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "Item",
  "Item",
  "Item",
];

export default function Categories() {
  return (
    <div className="border-t border-zinc-800">
      <div className="flex gap-3 overflow-x-auto px-4 py-3 no-scrollbar">

        {items.map((item, index) => (
          <button
            key={item}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm ${
              index === 0
                ? "bg-white text-black"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
}