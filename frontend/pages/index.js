import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>従業員管理システム</h1>
      <nav>
        <ul>
          <li>
            <Link href="/employees">
              <a>従業員一覧</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>新規従業員登録</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}