import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const SectionCard = ({ title, children }: Props) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default SectionCard;
