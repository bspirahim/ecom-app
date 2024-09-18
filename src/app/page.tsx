
// app/page.tsx

import Banner from "@/components/Banner";

const HomePage = async () => {
 
  // Fetch data on the server side
  const data = "test"; // Replace with your actual API call, e.g., await fetch('API_URL').then(res => res.json());

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-black dark:bg-gray-900 dark:text-gray-200">
      <Banner data={data} />
    </main>
  );
};

export default HomePage;
