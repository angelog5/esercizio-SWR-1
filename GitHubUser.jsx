import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user data</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.login}</p>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
    </div>
  );
};

export default GithubUser;
