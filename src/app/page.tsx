import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for map component (SSR disabled)
const MapComponent = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-purple-100 dark:bg-purple-900 rounded-lg">
      <p className="text-purple-700 dark:text-purple-300">Loading map component...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-50 font-sans dark:bg-purple-950">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-16 px-8 bg-purple-100 dark:bg-purple-900 sm:items-start">
        <div className="w-full">
          <div className="flex items-center justify-center mb-8">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              HKBU Campus Map
            </h1>
            <p className="text-lg text-purple-700 dark:text-purple-300">
              Interactive map powered by OpenStreetMap (Free Data Source)
            </p>
          </div>

          {/* Map Component */}
          <MapComponent />
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-5 text-purple-50 transition-colors hover:bg-purple-800 dark:hover:bg-purple-600 md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-purple-300 px-5 transition-colors hover:border-transparent hover:bg-purple-200 dark:border-purple-700 dark:hover:bg-purple-800 md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
