import Link from "next/link";
import React, { FC } from "react";
import { SignInButton } from "../SignInButton";
// import Image from "next/image";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        {/* <Image src="/images/logo.svg" alt="ig.news" width={20} height={20} layout="responsive"/> */}
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
