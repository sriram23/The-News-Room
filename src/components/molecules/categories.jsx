const Categories = () => {
    const CATEGORIES = [
        { text: "Business", value: "business" },
        { text: "Entertainment", value: "entertainment" },
        { text: "General", value: "general"},
        { text: "Health", value: "health" },
        { text: "Science", value: "science" },
        { text: "Sports", value: "sports" },
        { text: "Technology", value: "technology" },
      ];
    return (
        <div className="bg-blue-500 flex items-center justify-start p-4 flex-wrap">
            {CATEGORIES.map((category) => (
                <div key={category.value} className="p-2 m-2 bg-white rounded-xl cursor-pointer hover:shadow-lg hover:shadow-zinc-700">{category.text}</div>
            ))}
        </div>
    )
}

export default Categories;