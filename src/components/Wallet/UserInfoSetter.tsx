'use client'

import { useConnectKit } from "@particle-network/connect-react-ui";
import { useAccountStore } from "@/lib/states";
import { useEffect } from "react";

const UserInfoSetter = () => {

    const setAccount = useAccountStore(state => state.setUserInfo);
    const connectKit = useConnectKit();

    useEffect(() => {
        const userInfo = connectKit?.particle?.auth.getUserInfo();
        setAccount({ userInfo });
        localStorage.setItem("user-info", JSON.stringify(userInfo));
    }, [connectKit]);

    useEffect(() => {
        if (localStorage) {
            const appStateLS = localStorage.getItem("user-info");
            if (appStateLS) setAccount({ userInfo: appStateLS });
        }
    }, [localStorage?.getItem("user-info")]);

    return null;
};

export default UserInfoSetter;