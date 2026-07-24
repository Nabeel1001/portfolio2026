const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {children}
    </main>
  );
};

export default MainLayout;