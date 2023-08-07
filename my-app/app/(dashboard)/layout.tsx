

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
                <div className="text-white">hello sidebar</div>
                <main className="md:pl-72">
                    {/* <Navbar /> */}
                    {children}
                </main>
            </div>
        </div>
    )
  }