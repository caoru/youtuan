import React from "react";
import GoogleLogin from "react-google-login";

export default function Signin() {
  const responseGoogle = (res: any) => {
    console.log(res);
    alert(JSON.stringify(res));
    localStorage.setItem("res", res);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      buttonText="구글로 계속하기"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
}

