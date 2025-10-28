export default function Register({ setPage }) {
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
      <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
      <button
        onClick={() => setPage("showcase")}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Register
      </button>
      <p className="mt-3 text-center">
        Already have an account?{" "}
        <button className="text-blue-500" onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </div>
  );
}
