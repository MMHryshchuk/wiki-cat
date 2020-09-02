import React, {useState, useEffect} from "react";

interface IDeviceDetect {
    isMobile: boolean
}

export const useDeviceDetect = () : IDeviceDetect => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const userAgent =
            typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);

    return {isMobile} as IDeviceDetect;
};