type TitleProps = {
  name: string;
};

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div>
      <h1 className=" bg-amber-200 p-6 text-center text-4xl font-bold uppercase text-amber-950">
        {name}
      </h1>
    </div>
  );
};

export default Title;
