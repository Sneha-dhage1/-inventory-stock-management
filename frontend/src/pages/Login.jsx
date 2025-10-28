export default function Login({ setPage }) {
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
      <button
        onClick={() => setPage("showcase")}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Login
      </button>
      <p className="mt-3 text-center">
        Don’t have an account?{" "}
        <button className="text-blue-500" onClick={() => setPage("register")}>
          Register
        </button>
      </p>
    </div>
  );
}
