import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";
import { useForm } from "react-hook-form";
import { RiEyeLine, RiFlashlightFill, RiGitRepositoryPrivateLine } from "react-icons/ri";
import { BiMailSend, BiUser } from "react-icons/bi";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    const result = signup(data.name, data.email, data.password);
    if (result.success) {
      navigate("/");
    } else {
      setFormError("root", {
        message: result.message,
      });
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <div className="w-9 h-9 bg-volt-green rounded-xl flex items-center justify-center">
          <RiFlashlightFill className="text-ink" />
        </div>
        <span className="font-heading font-bold text-xl">
          Sky <span className="text-volt">Mart</span>{" "}
        </span>
      </div>
      <div className="bg-[#111] border border-white/8 rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-1">Create account</h1>
        <p className="text-white/30 text-sm mb-6">
          Join SkyMart and start shopping
        </p>

        {errors.root && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2 mb-4">
            {errors.root.message}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="relative">
            <BiUser
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
              className={`w-full bg-[#ffffff0d]  pl-10 border rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50 ${
                errors.name ? "border-red-500" : "border-gray-700/50"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="relative">
            <BiMailSend
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="you@example.com"
              className={`w-full pl-10 bg-[#ffffff0d] border rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50 ${
                errors.email ? "border-red-500" : "border-gray-700/50"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <RiGitRepositoryPrivateLine
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="••••••••"
              className={`w-full pl-10 bg-[#ffffff0d] border rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50 ${
                errors.password ? "border-red-500" : "border-gray-700/50"
              }`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <RiGitRepositoryPrivateLine
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />

            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords don't match",
              })}
              placeholder="Confirm your password"
              className={`w-full pl-10 bg-[#ffffff0d] border rounded-2xl px-4 h-11 text-sm focus:outline-none focus:border-[#c8f135]/50 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-700/50"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#c8f135] text-black font-semibold rounded-2xl h-11 text-sm hover:bg-[#d4f550] transition-colors cursor-pointer mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-white/40 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#c8f135] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
