import { useRouter } from 'next/router';
import MyHead from '../../components/MyHead';

export default function Detail({ params }) {
  // route는 프론트에서만됨! (클라이언트 사이드)
  const router = useRouter();
  // 백엔드에서 pre-render 되므로
  // serer에 아직 router.query.params가 배열로 존재하지 않을때를 대비
  const [title, id] = params || [];
  return (
    <div>
      <MyHead title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// fetch API 목적이 아니라 조금 더 빠르게 만들기 위함
export function getServerSideProps({ params: { params } }) {
  return { props: { params } };
}
