import Image from "next/image";
import styles from "./page.module.css";
import TextCarousel from "./_components/TextCarousel.js";

export default function Page() {
    return (
        <>
            {/* <button className={styles.animatedButton}></button> */}
            <Image src="/main_logo.png" alt="[DRE4M] Blissful Typists - Main Logo" width={1280*0.5} height={1024*0.5} className="mainLogo" />
            <TextCarousel />
            <p><b>This does not currently apply, but in the future:</b> Unfortunately, Nitro Type has a limit of 50 team members per team. This means that we unfortunately may have to remove people from the team and/or prevent new people from joining. We are truly sorry about this. Playing Nitro Type often can increase your chances of staying on the team.</p>
        </>
    );
}