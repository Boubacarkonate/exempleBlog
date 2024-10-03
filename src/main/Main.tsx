import About from "./About";
import Card from "./Card";
import Image from "./Image";

const Main = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 md:overflow-x-hidden lg:mx-32 xl:mx-52">
      {" "}
      {/* Ajout de marges responsives */}
      <Image imageName="Carte du monde" />
      <About
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias illo vel iste modi repellendus saepe aperiam quam odit iure voluptas eius dignissimos, nemo, asperiores totam! Distinctio laboriosam suscipit atque.
        Harum, asperiores accusantium officia sunt illo placeat reprehenderit aliquid nobis quibusdam cumque ratione labore. Maxime adipisci ullam, consequuntur officia delectus maiores quae non quibusdam sed culpa? Magni quos vero consectetur.
        Vitae possimus minus error, voluptatum quae quibusdam asperiores, doloremque repellendus modi totam est ut officia debitis blanditiis, quis corporis hic rem illo sed illum officiis libero nisi iure. Corporis, sapiente."
      />
      <Card />
    </div>
  );
};

export default Main;
