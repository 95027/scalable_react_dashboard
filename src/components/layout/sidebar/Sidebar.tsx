import Navigation from "./Navigation";

const Sidebar = () => {
    return (
        <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
            {/* Logo */}
            <div className="flex h-16 shrink-0 items-center border-b border-border px-5">
                <div className="flex items-center gap-3">
                    <img
                        src="#"
                        alt="Logistics"
                        className="h-9 w-9 object-contain"
                    />

                    <div>
                        <h1 className="text-base font-bold text-foreground">
                            Logistics
                        </h1>

                        <p className="text-xs text-muted-foreground">
                            Admin Portal
                        </p>
                    </div>
                </div>
            </div>

            <Navigation />
        </aside>
    );
};

export default Sidebar;