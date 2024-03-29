import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

function bestellingMislukt() {
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 max-w-3xl mx-auto text-center py-10">
            <div className="px-20 max-w-sm mx-auto">
              <Image
                src="/images/bestelling-mislukt/alert.png"
                width={512}
                height={512}
                alt="alert"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <h1 className="my-5 sm:my-10 font-lexend text-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Bestelling mislukt
            </h1>
            <div className="my-5 md:my-10">
              <p className="text-sm md:text-base">
                De bestelling is mislukt, er heeft geen betaling plaatsgevonden.
                Dit kan zijn doordat je zelf het bestelproces vroegtijdig hebt
                beëindigd, of omdat er iets is fout gegaan.
              </p>
              <p className="mt-5">
                Problemen met het plaatsen van een bestelling? Neem contact met
                ons op.
              </p>
            </div>

            <div className="my-5 sm:my-10">
              <div className="mb-2">
                <Link href="/producten">

                  <button
                    role="button"
                    className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                  >
                    Terug naar ons aanbod
                  </button>

                </Link>
              </div>
              <Link href="/contact" className="hover:underline">
                Neem contact op
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default bestellingMislukt;
