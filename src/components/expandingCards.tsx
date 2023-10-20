import * as React from "react";

interface Card {
  id: number;
  url: string;
  title: string;
  subTitle: string;
}

interface Props {
  data: Array<Card>;
  className?: string;
}

const ExpandingCards = ({ data, className }: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1);

  const onClick = (id: number) => setActiveId(id);

  return (
    <div className={`${className} relative flex w-full`}>
      {data.map((card, key) => (
        <React.Fragment key={key}>
          <div
            key={card.id}
            className={`panel ${
              activeId === card.id
                ? "active !skew-y-0"
                : card.id > activeId
                ? "-skew-y-12"
                : "skew-y-12"
            }`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}
          ></div>

          <div className="absolute md:-bottom-20 -bottom-14 w-full cursor-default">
            <p
              className={`${
                card.id === activeId ? "block" : "hidden"
              } text-center text-primary text-2xl font-semibold`}
            >
              {card.title}
            </p>
            <p
              className={`${
                card.id === activeId ? "block" : "hidden"
              } text-center text-black text-base`}
            >
              {card.subTitle}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExpandingCards;
