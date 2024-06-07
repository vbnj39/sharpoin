
import React, { Fragment, useState, useEffect } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import Preloader from "./comp/preloader/preloader";

export const Classic = ()=>{


    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 1500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.os_webkit_moz_ms_fox'));


    return(<Fragment>
                <main>
            {
                d ?
                    <Preloader />
                :
                    swap
            }
        </main>
    </Fragment>)
};