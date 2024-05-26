import ImgComponent from "../../../components/Img";
import ImageLogo from "../../../../public/login-image.png";
import TextComponent from "../../../components/TextComponent";
import TextInput from "../../../components/Inputs/TextInput";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex justify-center items-center bg-[#C7E0DF]">
        <ImgComponent src={ImageLogo} width={1000} className="text-center" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-100">
        <TextComponent
          size="2em"
          weight="700"
          color="#34AFB8" 
          className="mb-6"
        >
          Administrador
        </TextComponent>

        <TextInput label={"E-mail"} name={"email"} type="email"/>
        <TextInput label={"Senha"} name={"password"} type="password"/>

        <button className="p-2 bg-teal-500 text-white rounded">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
