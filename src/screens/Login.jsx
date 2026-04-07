import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";
import { RiFlashlightFill, RiGitRepositoryPrivateLine } from "react-icons/ri";
import { BiMailSend } from "react-icons/bi";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const carddata = [
    { number: "20K+", title: "Products" },
    { number: "50K+", title: "Users" },
    { number: "4.9★", title: "Rating" },
  ];

  const handleLogin = () => {
    if (!email || !password) return setError("All fields are required");
    const result = login(email, password);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/80 p-12 relative overflow-hidden">
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-volt-green rounded-2xl flex items-center justify-center">
            <RiFlashlightFill size={18} className="text-ink" />
          </div>
          <span className="font-heading font-bold text-2xl">
            Sky <span className="text-volt">Mart</span>
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <p className="text-volt text-sm font-body font-medium mb-4 tracking-widest uppercase">
            Welcome Back
          </p>
          <h1 className="font-heading font-bold text-5xl leading-tight mb-6">
            Shop the future. <br /> <span className="text-volt">Today.</span>
          </h1>
          <p className="text-white/40 text-base font-body max-w-sm leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-12">
            {carddata.map((item, idx) => {
              return (
                <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                  <p className="font-heading font-bold text-xl text-volt">
                    {item.number}
                  </p>
                  <p className="text-white/40 text-xs font-body mt-1">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-[#111] border border-white/8 rounded-3xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-1">Sign in</h1>
          <p className="text-white/40 text-sm mb-6">
            Enter your credentials to continue
          </p>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2 mb-4">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-4">
            <div className="relative">
              <BiMailSend
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              />{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 bg-[#ffffff0d] border border-gray-700/50 rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50"
              />
            </div>
            <div className="relative">
               <RiGitRepositoryPrivateLine
                           size={15}
                           className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                         />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 bg-[#ffffff0d] border border-gray-700/50 rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#c8f135] text-black font-semibold rounded-2xl h-11 text-sm hover:bg-[#d4f550] transition-colors cursor-pointer mt-1"
            >
              Login
            </button>
          </div>

          <p className="text-white/40 text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#c8f135] hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
