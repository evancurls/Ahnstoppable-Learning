import { useForm } from 'react-hook-form';
import Input from '../components/ui/Input';

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label="Username"
        id="username"
        error={errors.username?.message}
        {...register("username", { 
          required: "Username is required",
          minLength: { value: 3, message: "Too short!" } 
        })}
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};