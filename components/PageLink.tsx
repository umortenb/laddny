import { useRouter } from 'next/router'
import { NavLink } from '../view/NavLink';

export interface PageLinkProps {
  
}

const PageLink: React.FC<PageLinkProps> = () => {
  const router = useRouter()

  const isActiveRoute = (href: string): boolean => {
    console.log(router.pathname);
    return router.pathname === href;
  }

  return ( 
    <NavLink href="/" active={isActiveRoute("/")}>Home</NavLink>
   );
}
 
export default PageLink;