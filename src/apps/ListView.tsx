import { FC } from "react";

const ListView: FC = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        ListView Example
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
