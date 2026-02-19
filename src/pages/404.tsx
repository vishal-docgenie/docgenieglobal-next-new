
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    console.error("404 Error:", asPath);
  }, [asPath]);

  return (
    <>
      <Head>
        <title>Page Not Found | DocGenie Global</title>
        <meta 
          name="description" 
          content="The page you are looking for does not exist. Return to the DocGenie Global homepage." 
        />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-brand-orange">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link href="/" className="text-brand-orange hover:text-brand-orange/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
