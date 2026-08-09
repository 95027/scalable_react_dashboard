import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/sidebar/Sidebar"
import Header from "../components/layout/header/Header"

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout