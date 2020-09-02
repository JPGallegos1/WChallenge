import { useSubmit } from "../hooks/useSubmit";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/layout";
import InputLogin from "../components/login/inputLogin";
import InputPass from "../components/login/inputPass";
import Remember from "../components/login/remember";
import SubmitForm from "../components/login/submitForm";
import Notification from "../components/notifications/notification";

const Login = () => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      email: "user@wolox.com.ar",
      password: "",
      remember: false
    }
  });

  const { onSubmit, loading, submitting } = useSubmit();

  return (
    <Layout m={{ sm: "4rem auto", md: "2rem auto" }}>
      {loading &&
        <Notification text="Cargando..." status="warning" />
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLogin register={register} errors={errors} />

        <InputPass register={register} errors={errors} />

        <Remember register={register} />

        <SubmitForm submitting={submitting} />

        {submitting &&
          <Notification text="¡Iniciaste sesión y estás siendo redireccionade!" status="success" />
        }
      </form>
    </Layout>
  );
};

export default Login;
