import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Template from "@/Layout/Template";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [nomorInduk, setNomorInduk] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const { errors } = usePage().props;

    console.log(errors);

    const handleStore = (e) => {
        e.preventDefault();
        router.post(
            "/user",
            {
                name: name,
                nomor_induk: nomorInduk,
                password: password,
                role: role,
            },
            {
                onSuccess: () => {
                    Swal.fire("Data berhasil disimpan", "", "success");
                },
            }
        );
    };

    return (
        <Template>
            <Head title="InternatApp - Tambah User" />
            <div className="row">
                <div className="col-7">
                    <div className="card">
                        <div className="card-header font-weight-bold text-primary">
                            Form
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleStore}>
                                <div className="form-group">
                                    <label
                                        for="name"
                                        class="form-label font-weight-bold"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className={
                                            errors.name
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan nama"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <div class="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="nomor_induk"
                                        class="form-label font-weight-bold"
                                    >
                                        Nomor Induk
                                    </label>
                                    <input
                                        type="text"
                                        id="nomor_induk"
                                        className={
                                            errors.nomor_induk
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan nomor induk"
                                        value={nomorInduk}
                                        onChange={(e) =>
                                            setNomorInduk(e.target.value)
                                        }
                                    />
                                    {errors.nomor_induk && (
                                        <div class="invalid-feedback">
                                            {errors.nomor_induk}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="password"
                                        class="form-label font-weight-bold"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className={
                                            errors.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <div class="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="role"
                                        class="form-label font-weight-bold"
                                    >
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        className={
                                            errors.role
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >
                                        <option value="" selected>
                                            Role
                                        </option>
                                        <option value="admin">Admin</option>
                                        <option value="sales">Sales</option>
                                    </select>
                                    {errors.role && (
                                        <div class="invalid-feedback">
                                            {errors.role}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-primary mr-2"
                                    >
                                        Simpan
                                    </button>
                                    <Link
                                        href="/user"
                                        class="btn btn-secondary"
                                    >
                                        Batal
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default CreateUser;
