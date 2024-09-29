import React from "react";
import Badge from "./Badge";

interface ModelsProps {
  models: string[];
  selectedModel: string | null;
  onSelectModel: (model: string | null) => void;
}

const Models: React.FC<ModelsProps> = ({
  models,
  selectedModel,
  onSelectModel,
}) => {
  const toggleModel = (model: string) => {
    onSelectModel(selectedModel === model ? null : model);
  };

  return (
    <div className="px-64 flex flex-col py-6 gap-5">
      <div className="text-4xl mb-4">
        Select your model
        <span className="underline">......</span>
      </div>
      <div className="flex justify-center items-center px-40 ">
        <div className="grid grid-cols-3 gap-6 w-full">
          {models.map((model) => (
            <Badge
              key={model}
              text={model}
              selected={selectedModel === model}
              onClick={() => toggleModel(model)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
