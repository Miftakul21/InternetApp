import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import TemplateAuth from "@/Layout/TemplateAuth";
import Internet from "@/Assets/Image/Internet.jpg";

const Login = () => {
    const [nomorInduk, setNomorInduk] = useState();
    const [password, setPassword] = useState();
    const { errors } = usePage().props;

    const [type, setType] = useState("password");

    const handleLogin = (e) => {
        e.preventDefault();
        router.post("/auth", {
            nomor_induk: nomorInduk,
            password: password,
        });
    };

    const showPassowrd = () => {
        return type === "password" ? setType("text") : setType("password");
    };

    return (
        <TemplateAuth>
            <Head title="Home Internet - Login" />
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div class="row" style={{ height: 500 }}>
                            <div class="col-lg-6 align-self-center">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class=" text-gray-900 mb-4 fw-bold">
                                            LOGIN
                                        </h1>
                                    </div>
                                    <form class="user" onSubmit={handleLogin}>
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                className={
                                                    errors.nomor_induk
                                                        ? "form-control form-control-user is-invalid"
                                                        : "form-control form-control-user"
                                                }
                                                id="nomor_induk"
                                                placeholder="Masukkan nomor induk"
                                                style={style.input}
                                                value={nomorInduk}
                                                onChange={(e) =>
                                                    setNomorInduk(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.nomor_induk && (
                                                <div class="invalid-feedback">
                                                    {errors.nomor_induk}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            class="form-group"
                                            style={style.containerPassword}
                                        >
                                            <input
                                                type={type}
                                                className={
                                                    errors.password
                                                        ? "form-control form-control-user is-invalid"
                                                        : "form-control form-control-user"
                                                }
                                                id="password"
                                                placeholder="Masukkan password"
                                                style={style.input}
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <span
                                                onClick={showPassowrd}
                                                style={style.buttonShow}
                                            >
                                                <i
                                                    className={
                                                        type == "password"
                                                            ? "fas fa-eye-slash"
                                                            : "fas fa-eye"
                                                    }
                                                ></i>
                                            </span>

                                            {errors.password && (
                                                <div class="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                            style={style.button}
                                        >
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div
                                class="col-lg-6 d-none d-lg-block"
                                style={style.containerImage}
                            >
                                <img
                                    src={Internet}
                                    alt="image-home"
                                    style={style.image}
                                />
                                <div style={style.linerGradient}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateAuth>
    );
};

const style = {
    input: {
        borderRadius: 10,
        fontSize: 14,
    },
    button: {
        borderRadius: 10,
        width: 100,
        padding: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    containerImage: {
        position: "relative",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        backgroundSize: "center",
    },
    linerGradient: {
        position: "absolute",
        top: 0,
        left: 12,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: 0.5,
    },
    containerPassword: {
        position: "relative",
    },
    buttonShow: {
        position: "absolute",
        right: 20,
        top: 12,
        fontSize: 20,
    },
};

export default Login;
