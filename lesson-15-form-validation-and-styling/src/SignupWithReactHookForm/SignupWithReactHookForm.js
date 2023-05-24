import { useForm } from "react-hook-form";
const SignupWithReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log("🚀  errors:", errors);

  const onFormSubmitHandler = (data) => {
    console.log("Data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmitHandler)}>
      <h3>Create a new account</h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          {...register("email", {
            required: true,
          })}
        />
        {errors?.email && <p className="text-danger">Email is required</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          {...register("username", {
            required: true,
          })}
        />
        {errors?.username && (
          <p className="text-danger">Username is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          {...register("fullname", { required: true })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[A-Z])(?=.*\W).+$/,
          })}
        />
        {errors?.password && (
          <p className="text-danger">
            Password must be at least 8 characters long, include a capital
            letter and one special character
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignupWithReactHookForm;
