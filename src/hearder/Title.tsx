type TitleProps = {
  name: string;
};

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div>
      <h1 className=" bg-amber-950 p-6 text-center text-5xl font-bold uppercase text-amber-200">
        {name}
      </h1>
    </div>
  );
};

export default Title;
