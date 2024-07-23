const INTERESTS: string[]= ["All", "Sports", "Entertainment", "Music", "News", "Technology", "Health", "Science", "Travel", "Food", "Fashion", "Education", "Finance", "Business", "Movies", "Books", "Art", "History", "Lifestyle", "Politics", "Nature", "Comedy", "Gaming", "Fitness", "Photography", "DIY", "Automotive", "Pets", "Relationships", "Parenting", "Hobbies"];

export const InterestBar: React.FC = () => {
  return (
    <>
      <div className="interest-bar hidden sm:flex overflow-x-scroll overscroll-contain m-2">
        {INTERESTS.map((item, index) => (
          <InterestComponent key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

function InterestComponent(props: any) {
  const baseClass = "px-2 py-1 mx-1 items-center cursor-pointer rounded-lg text-xs transition duration-300";
  const firstItemClass = "bg-white text-black";
  const otherItemsClass = "bg-gray-100 bg-opacity-20 hover:bg-gray-100 hover:bg-opacity-35";

  const className = `${baseClass} ${props.index === 0 ? firstItemClass : otherItemsClass}`;

  return (
    <div className={className}>
      {props.item}
    </div>
  );
}
