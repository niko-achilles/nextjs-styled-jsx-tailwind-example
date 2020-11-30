import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 flex">
        <div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img
              className="rounded-lg shadow-xl sm:mt-2 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/images/olymp.jpg"
              alt="An evening in the sea of beautiful Hellas"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
              The twelve Olympians...
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">
                {" "}
                Residence on mountain Olymp.
              </span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              In ancient hellenic mythology, the twelve Olympians are the major
              deities of the Hellenic pantheon, commonly considered to be Zeus,
              Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares,
              Hephaestus, Aphrodite, Hermes, Hestia and Dionysus.
            </p>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <Link href="/olympians">
                <a href="#" className="btn btn-indigo shadow-lg sm:text-base">
                  Learn more...
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/olymp.jpg"
            alt="An evening in the sea of beautiful Hellas"
          />
        </div>
      </div>
    </div>
  );
}
