const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-50 text-white overflow-x-hidden">
      {children}
    </main>
  );
};

export default MainLayout;