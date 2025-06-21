"use client"; // ★: "use client" ディレクティブを追加する

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { IconButton } from "./IconButton";

function getAriaCurrent(flag: boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const openModal = () => {
    setIsOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getAriaCurrent(pathName === "/")}>
            トップ
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            {...getAriaCurrent(pathName.startsWith("/categories"))}
          >
            カテゴリー一覧
          </Link>
        </li>
      </ul>
      <IconButton onClick={openModal}>写真を投稿する</IconButton>
    </nav>
  );
}
