import React from "react";

type PageContentWrapperProps = {
  children: React.ReactNode;
};

const PageContentWrapper: React.FC<PageContentWrapperProps> = ({
  children,
}) => {
  return <div className="p-8">{children}</div>;
};

export default PageContentWrapper;
