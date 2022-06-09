import { useState } from 'react'
import './main.scss'
import { UserNameIcon, LockIcon } from '../../assets/images/icons'
const Login = () => {
    let history = useHistory();
    const [state, setState] = useState(false)
    const [error, setError] = useState(false);
    const SignUpHandler = (e) => {
        e.preventDefault();
        const datas = {
            _username: state._username,
            _password: state._password,
            _subdomain: "toko",
        };

        var formBody = [];
        for (var property in datas) {
            formBody.push(
                encodeURIComponent(property) + "=" + encodeURIComponent(datas[property])
            );
        }
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTQ3MzU0MzEsImV4cCI6MTY1NTc3MjIzMSwicm9sZXMiOlt7fV0sImlkIjoxMTcyMTF9.LBCY-qOX99qgP2s-JBLUPk8jiVmBkoZVQtQMgxuszFXAb-Kt0-kjgdDbXi0RdEkdiUHpHbHhTcwm0cDyn39-Sw8DxHjY8zKZmKBPJOADXJYkPDS4ROIlj-3djZ-1M7tOMtxK15tNtpAynZb449VRPeVRzOI2jBTgIO3GkYm0Zlu39fVKmU1Jp7R8oBX6j2KyXT4ZEX-rdjHUQAm-TWZxtQgV56J4Nso6wvisZFjAPTk6edN0Cy_GFCjKbiLSwruO8wFj8YYOe7jyNNaCVBZs1XM3CKBWXD1qgwcYNvX0etLsB4-rJzeShiRgU1JcOEvUEZRYspSWyfvf0EBCsbzIxjFhkJifyg-kmoLFB8AswR_u-DETRqnHRllctxR3lF9iZfxXesBhn2inRBryixlUgNy2fSFDf4jzW3qB8QHNPKLqihzE-yqlC2IXuaS2jd3zjHTPvIUUxBzH31G2U5nR4Gw9UpmSEkED7pbpuMMEPBN1y3Q-6OEtwMUJ1AVozS0y_-zILSu0rFaOCDJDRUAzatGymQuNs01sL94oRGbPcIB1fR2saBfvy4xKwUGLcFLSXT5gUj3F_IDkAUW_0zcfjtLfCjurVRW-16khJtOacZuaqzMYEM_Fxou4Ro3bQdIm0zRv0WeSDlS3s_mY44MXfywxIDhns95r-Y0KV0mFDY4"
        formBody = formBody.join("&");
        setError(false);
        fetch("https://toko.ox-sys.com/security/auth_check", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                Authorization: "Bearer " + token,
            },
            body: formBody,

        })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", JSON.stringify(token))
                }
                else {
                    localStorage.removeItem("token")
                    setError(true);
                }
            }).catch((err) => setError(err))
    }
    return (
        <>
            <div className="register-main load-anim">
                <form onSubmit={SignUpHandler} className="register-form  load-anim">
                    <h1 className="register-title">Login</h1>
                    <label className="register-label">
                        <span>Name:</span>
                        <div>
                            <UserNameIcon />
                            <input
                                onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                                type="text"
                                name="_username"
                                placeholder="Enter name..."
                                required
                            />
                        </div>
                    </label>
                    <label className="register-label">
                        <span>Password:</span>
                        <div>
                            <LockIcon />
                            <input
                                onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                                type="password"
                                name="_password"
                                placeholder="************"
                                required
                                minLength="8"
                            />
                        </div>
                    </label>
                    {error && (
                        <p className="password-error">
                            oops try again:(
                        </p>
                    )}
                    <button className="register-submit" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login