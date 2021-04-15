import Link from "next/link";
import { useRouter } from "next/router";
import { NavLink } from "../generic/links/NavLink";

export interface PageLinkProps {}

const PageLink: React.FC<PageLinkProps> = () => {
  const router = useRouter();

  const isActiveRoute = (href: string): boolean => {
    console.log(router.pathname);
    return router.pathname === href;
  };

  return (
    <Link href="/">
      <NavLink active={isActiveRoute("/")}>Home</NavLink>
    </Link>
  );
};

export default PageLink;
