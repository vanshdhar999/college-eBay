import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono text-sm">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Image
            src="/ebay-logo.png" // Replace with your eBay logo image path
            alt="eBay Logo"
            width={120}
            height={40}
          />
          <h1 className="ml-2 text-lg font-bold">College Marketplace</h1>
        </div>
        <nav>
          <a href="#login" className="mr-4 text-white">
            Login
          </a>
          <a href="#my-items" className="mr-4 text-white">
            My Items
          </a>
          <a href="#my-account" className="text-white">
            My Account
          </a>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-between p-24">
        {/* Your existing content here */}

        {/* Scroll Bar */}
        <div className="scroll-bar w-2 h-20 bg-gray-300 rounded-full mt-8"></div>
      </main>

      {/* Footer Section with FAQ */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc pl-4">
          <li>How do I list an item for sale?</li>
          <li>How can I contact a seller?</li>
          {/* Add more FAQ items as needed */}
        </ul>
        <p>&copy; 2024 College Marketplace</p>
      </footer>
    </div>
  );
}
