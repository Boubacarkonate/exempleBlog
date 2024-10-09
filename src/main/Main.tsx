import About from "./About";
import Card from "./Card";
import Gallery from "./Gallery";
import Image from "./Image";

const Main = () => {
  return (
    <div className="mx-4 grid gap-16 sm:mx-10 md:mx-20 md:overflow-x-hidden lg:mx-32 xl:mx-52">
      <Image imageName="Carte du monde" />
      <About text="Bienvenue sur The Travel Blog ! Passionné par l'exploration de nouveaux horizons, j'ai créé cet espace pour partager mes aventures, mes découvertes et mes conseils de voyage. Que vous soyez un voyageur chevronné ou que vous planifiez votre première escapade, ici vous trouverez des récits inspirants, des astuces pratiques et des guides de destinations. Mon objectif est de vous inspirer à sortir de votre zone de confort et à découvrir le monde sous un nouvel angle. Rejoignez-moi dans cette aventure et ensemble, découvrons les merveilles de notre planète !" />
      <Card />
      <About text="Yes, la galerie de The Travel Blog, où chaque image raconte une histoire unique de mes aventures à travers le monde. Chaque photo capturée est une fenêtre ouverte sur des lieux fascinants, des cultures vibrantes et des moments inoubliables. Que ce soit une plage ensoleillée à Santorin, des montagnes majestueuses recouvertes de neige ou un marché animé aux couleurs éclatantes, j'espère que ces images vous inspireront à explorer de nouveaux horizons. À travers ces photographies, je partage non seulement la beauté des paysages, mais aussi l’essence des expériences vécues. Je vous invite à plonger dans ces souvenirs visuels et à rêver de vos prochaines escapades." />
      <Gallery />
    </div>
  );
};

export default Main;
