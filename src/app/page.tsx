"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Check if the user is in Instagram's WebView
    const userAgent = navigator.userAgent || navigator.vendor;
    const isInstagramWebView = userAgent.includes("Instagram");

    if (isInstagramWebView) {
      // Show an alert with a link to open in Chrome
      const openInChrome = () => {
        window.open("https://witro.shop/angel_perfume", "_blank");
      };

      alert("For a better experience, open this page in Chrome.");

      // Add a prompt for the user to open the link in Chrome
      const userConfirmed = window.confirm(
        "Would you like to open this page in Chrome?"
      );

      if (userConfirmed) {
        openInChrome();
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
          </a>
        </div>
      </div>

      {/* Other content */}
    </main>
  );
}
