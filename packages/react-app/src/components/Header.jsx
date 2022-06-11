import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/WeLightProject/Tai-Shang-NFT-Gallery" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Tai-Shang-NFT-Gallery"
        subTitle="Claim Map NFT"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
