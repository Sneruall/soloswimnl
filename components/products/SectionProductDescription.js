import {
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import NumberFormat from "react-number-format";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function SectionProductDescription({
  productData,
  selectedOption,
  setLevel,
  addItemToBasket,
}) {
  const formattedProductImages = productData.images.map((image) => {
    return (
      <div key={image}>
        <Image
          src={image}
          width={400}
          height={400}
          alt={productData.title}
        ></Image>
      </div>
    );
  });

    // React responsive carousel (images slider)
  // Return an array with all the images, rendered as normal img tag.
  const renderCustomThumbs = () => {
    const thumbList = productData.images.map((image) => {
      return <img key={image} src={image} alt={productData.title} />;
    });
    return thumbList;
  };

  return (
    <section className="bg-white">
      <div className="md:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-between gap-10">
          <div className="w-full md:max-w-sm mx-auto md:flex-grow md:w-32 pt-8 md:pt-5">
            <Carousel
              showStatus={false}
              showIndicators={false}
              renderThumbs={renderCustomThumbs}
              thumbWidth={80}
              infiniteLoop
              showArrows={false}
            >
              {formattedProductImages}
            </Carousel>
          </div>
          <div className="md:max-w-xl md:flex-1 px-5 sm:px-8 md:px-0">
            <div className="mb-8">
              <h1 className="font-lexend font-extrabold text-navy-light1 text-3xl lg:text-5xl my-2 lg:leading-13">
                {productData.title}
              </h1>
              <p className="font-bold text-navy-light1 text-lg lg:text-2xl my-2 lg:my-5">
                <NumberFormat
                  value={productData.price}
                  decimalSeparator=","
                  displayType="text"
                  prefix={"€ "}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </p>
              <p className="text-navy-light1 leading-6 my-2 lg:my-5 text-tiny">
                {productData.description}{" "}
                <a
                  className="uppercase font-bold hover:underline text-tiny"
                  href="#watkrijgje"
                >
                  Meer lezen
                </a>
              </p>
            </div>
            <div className="my-8 lg:my-10">
              <div className="flex flex-row justify-between items-center my-2">
                <p className="font-bold text-navy-light1 uppercase mr-8 text-tiny">
                  Niveau
                </p>
                <select
                  className="border-gray-300 border-2 rounded-full p-2 px-4 w-full text-tiny"
                  name="level"
                  id="level"
                  value={selectedOption}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Beginners">Beginners</option>
                  <option value="Semi-gevorderden">Semi-gevorderden</option>
                  <option value="Gevorderden">Gevorderden</option>
                </select>
              </div>
              <a className="underline text-navy-light1 text-xs" href="#niveau">
                Hoe weet ik mijn niveau?
              </a>
            </div>
            <div className="text-center my-6">
              <button
                role="button"
                onClick={() => {
                  addItemToBasket(productData);
                }}
                className="text-white lg:text-lg font-bold uppercase w-full px-3 py-5 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
              >
                Toevoegen aan winkelwagen
              </button>
              <div className="flex flex-row items-center justify-center space-x-2 my-4 lg:my-8">
                <ClockIcon className="h-8 w-8 text-slateblue-dark1" />
                <p className="text-navy-light1 text-xs pr-5">
                  1 - 2 werkdagen levertijd
                </p>
                <CreditCardIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                <p className="hidden sm:block text-navy-light1 text-xs pr-5">
                  Veilig online betalen
                </p>
                <CalendarIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                <p className="hidden sm:block text-navy-light1 text-xs">
                  14 dagen bedenktijd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProductDescription;