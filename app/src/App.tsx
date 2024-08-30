import { Loading } from "./components";
import { useEffect, useState } from "react";
import { ErrorMessage, PostModel } from "./models";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [error, setError] = useState<ErrorMessage | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("/api/v1/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
        setError(error);
        setLoading(false);
      });
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-4 my-3">
      <div className="flex items-center justify-center my-4">
        <h1 className="text-4xl font-bold">All Posts</h1>
      </div>
      <div className="mt-2 mx-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="text-xl my-2 capitalize block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full"
          >
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
