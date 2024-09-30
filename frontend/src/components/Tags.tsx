import Badge from "./Badge";

interface TagsProps {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tags = ({ tags, selectedTags, setSelectedTags }: TagsProps) => {
  const toggleTag = (tag: string) => {
    setSelectedTags((prev: string[]) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="px-64 flex flex-col py-6 gap-6  ">
      <div className="text-4xl mb-4">
        Choose your tags
        <span className="underline">......</span>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-7 gap-6">
          {tags.slice(0, 7).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-6 gap-8 mt-4">
          {tags.slice(7, 13).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-8 gap-6 mt-4">
          {tags.slice(13, 21).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-8 mt-4">
          {tags.slice(21,26).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-7 gap-6 mt-4">
          {tags.slice(26, 33).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="grid grid-cols-6 gap-8 mt-4">
          {tags.slice(33,39).map((tag) => (
            <Badge
              key={tag}
              text={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
