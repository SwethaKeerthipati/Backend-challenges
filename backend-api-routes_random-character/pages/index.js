// export default function HomePage() {
//   return <h1>Hello from Next.js!</h1>;
// }

import useSWR from "swr";
export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/random-character", fetcher);
  return (
    <div>
      <h1>Random Character</h1>
      {error && <div>Error loading data</div>}
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>
            {data.firstName} {data.lastName} {data.twitter}
          </h2>
        </div>
      )}
    </div>
  );
}
