import Link from "next/link";
import Image from "next/image";

import { getSortedProductsData } from "../../lib/products";
import Faq from "../../components/products/Faq";
import NumberFormat from "react-number-format";

function index({ allProductsData }) {
  return (
    <main>
      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-8 lg:pt-20">
          <div>
            <h1 className="text-main font-lexend font-extrabold text-3xl lg:text-6xl my-2 lg:my-6">
              De zwemschema's van Soloswim
            </h1>
            <h2 className="text-navy-light1 font-lexend font-extrabold text-xl lg:text-4xl my-2 lg:my-4">
              Ondertitel
            </h2>
            <p className="text-navy-light1 text-tiny leading-6">
              Bij Soloswim vind je zwemtrainingen waarmee jij nog meer uit je
              zwemmoment kunt halen. Zwem je graag lange afstanden, of hou je
              meer van explosiviteit? Bekijk ons diverse aanbod en ga gauw aan
              de slag met jouw eigen Soloswim bundel! Moeite met kiezen? Ga voor
              de combo
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-5 my-10 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {allProductsData.map(({ id, title, images, price }) => (
                <li
                  key={id}
                  className="bg-grey-light4 rounded-2xl hover:cursor-pointer hover:ring-4 hover:ring-main py-5"
                >
                  <Link href={`/producten/${id}`}>
                    <a>
                      <div>
                        <div className="inline-block bg-white mb-6 rounded-r-md px-3">
                          <p className="text-navy-light1 text-tiny">
                            Recreanten
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-4/6 mx-auto">
                            <Image
                              src={images[0]}
                              width={400}
                              height={400}
                              alt={title}
                            ></Image>
                          </div>
                          <div className="text-grey-dark1 px-8 mx-auto mt-10">
                            <p className="font-bold uppercase">{title}</p>
                            <p className="text-tiny mt-1">
                              <NumberFormat
                                value={price}
                                decimalSeparator=","
                                displayType="text"
                                prefix={"€ "}
                                decimalScale={2}
                                fixedDecimalScale={true}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION, todo: pull in information from .md files? */}
      <Faq />
    </main>
  );
}

export default index;

export async function getStaticProps() {
  const allProductsData = getSortedProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}
