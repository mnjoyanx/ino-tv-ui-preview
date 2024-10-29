import React from "react";

type PageIntroHeaderProps = {
  title: string;
};

const PageIntroHeader: React.FC<PageIntroHeaderProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-sm text-gray-500">Component Usage </p>
    </div>
  );
};

export default PageIntroHeader;
