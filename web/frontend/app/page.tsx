import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch min-h-screen min-v-screen bg-gradient-to-r from-red-700 via-red-500 to-red-700">
      <header className="h-[300px] bg-[url('/images/circuit-white-upper-left-corner.svg')] bg-left-top bg-no-repeat"></header>
      <section className="flex grow justify-center items-center w-full basis-auto">
          <a className="w-11/12 md:w-6/12" href="mailto:hello@cloudbuild.co">
            <Image className="drop-shadow-lg" 
                   src="/images/cloudbuild-logo-white-transperant.svg" 
                   alt="Cloud Build Solutions Logo" width="954" height="234" />
          </a>
      </section>
      <footer className="h-[300px] bg-[url('/images/circuit-white-lower-right-corner.svg')] bg-right-bottom bg-no-repeat"></footer>
    </main>
  );
}
