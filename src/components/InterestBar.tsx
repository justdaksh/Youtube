const INTERESTS: string[]= ["All", "Sports", "Entertainment", "Music", "News", "Technology", "Health", "Science", "Travel", "Food", "Fashion", "Education", "Finance", "Business", "Movies", "Books", "Art", "History", "Lifestyle", "Politics", "Nature", "Comedy", "Gaming", "Fitness", "Photography", "DIY", "Automotive", "Pets", "Relationships", "Parenting", "Hobbies"];

export const InterestBar: React.FC = () => {
  return (
    <>
      <div className="hidden sm:flex overflow-x-scroll overscroll-contain m-2">
        {INTERESTS.map((item, index) => (
          <InterestComponent key={index} item={item} />
        ))}
      </div>
    </>
  );
};

function InterestComponent(props: any) {
  const className = props.key === 0 ? "bg-white text-black" : "";
  return (
    <>
      <div className="px-2 py-1 mx-1 items-center cursor-pointer bg-gray-100 bg-opacity-20 rounded-lg hover:bg-gray-100 hover:bg-opacity-35 transition duration-300 text-xs">
        {props.item}
      </div>
    </>
  );
}
