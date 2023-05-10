import Link from "next/link";
import { useRouter } from "next/router";

export const CustomLink = ({ href, children }) => {
  const router = useRouter();

  const pathN = router.pathname.match(/^\/\w*/)[0];

  return (
    <Link className={pathN === href ? "active-link" : ""} href={href}>
      {children}
    </Link>
  );
};
