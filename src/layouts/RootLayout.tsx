import { Outlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useEffect } from "react";
import { checkAuth } from "../features/auth/authThunks";
import LoadingScreen from "../components/common/LoadingScreen";

const RootLayout = () => {

    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <Outlet />
    )
}

export default RootLayout