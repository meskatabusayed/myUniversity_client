import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";


const Login = () => {
  const dispatch = useAppDispatch()
  const {register , handleSubmit} = useForm({
    defaultValues :{
      id:"0001",
      password:"admin12345" 
    }
  });

  const [login , { error}] = useLoginMutation();



  const onSubmit = async (data) => {
    const userInfo = {
      id : data.id ,
      password : data.password
    }

    const res = await login(userInfo).unwrap();
    dispatch(setUser({user : {} , token :  res.data.accessToken}))
    console.log(res);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
        <Button htmlType="submit">Login</Button>
    </form>
  )
}

export default Login;
