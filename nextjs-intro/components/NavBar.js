import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <div
          className={`${router.pathname === '/' ? styles.active : ''} ${
            styles.link
          }`}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={[
            styles.link,
            router.pathname === '/about' ? styles.active : '',
          ].join(' ')}
        >
          About
        </div>
      </Link>
    </nav>
  );
}
