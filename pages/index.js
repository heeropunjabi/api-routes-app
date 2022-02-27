import useSWR from "swr";
import Person from "../components/Person";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>

      <Image src='/images/react.jpg' width='500' height='500' />
    </div>
  );
}
