import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

export const CustomLink = ({ href, children }) => {
  const router = useRouter();

  const pathN = router.pathname.match(/^\/\w*/)[0];

  let className = children.props?.className || "";

  if (pathN === href) {
    className != ""
      ? (className = `${className} active-link`)
      : (className = `active-link`);
  }

  return <Link href={href}>{cloneElement(children, { className })}</Link>;
};
