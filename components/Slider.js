import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://media.naheed.pk/magiccart/magicslider/l/o/locked_grids-11.jpg" },
  { url: "https://media.naheed.pk/magiccart/magicslider/h/o/home-appliances-desktop05.jpg" },
  { url: "https://media.naheed.pk/magiccart/magicslider/b/a/banner.jpg" },
  { url: "https://media.naheed.pk/magiccart/magicslider/a/r/ariul-desktop03.jpg.png" },
  { url: "https://media.naheed.pk/magiccart/magicslider/a/p/app-banner-web.jpg" },
  { url: "https://media.naheed.pk/magiccart/magicslider/d/e/desktop_1.png" }
];

function Slider () {
  return (
    <div className="mt-16 sm:mt-[70px] lg:mt-[63px] xl:mt-0 ml-6 sm:ml-0 xl:ml-0 z-10">
    
      <SimpleImageSlider
         width={1349}
         height={274}
        images={images}
        showBullets={false}
        showNavs={true}
      />
     
    </div>
  );
}

export default Slider