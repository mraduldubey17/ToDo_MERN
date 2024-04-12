import React from "react";
import "./SignUp.css";
import HeadingComp from "./HeadingComp.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store";

import { useDispatch } from "react-redux";

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:1000/api/v1/signin", Inputs)
            .then((response) => {
                sessionStorage.setItem("id", response.data.others._id);
                dispatch(authActions.login());
                history("/todo");
            });
    };
    return (
    <div>
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column  w-100 p-3">
                            <input className="p-2 my-2 input-signup" type="email" name="email" placeholder="Enter Your Email"
                                value={Inputs.email}
                                onChange={change}
                            />
                            <input className="p-2 my-2 input-signup" type="password" name="password" placeholder="Enter Your Password"
                                value={Inputs.password}
                                onChange={change}
                            />
                            <button className="btn-signup p-2 " onClick={submit}>Sign In</button>

                        </div>
                    </div>
                    <div className="col-lg-4 column col-left d-none d-lg-flex justify-content-center align-items-center ">
                        <HeadingComp first="Sign" second="In" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default SignIn;