import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/sidebar/Sidebar"
import Header from "../components/layout/header/Header"

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header />

                <main className="min-h-0 flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;