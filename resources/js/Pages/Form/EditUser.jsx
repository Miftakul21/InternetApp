import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Template from "@/Layout/Template";

const EditUser = () => {
    const { errors } = usePage().props;
    const { user } = usePage().props;

    const [nameUpdate, setNameUpdate] = useState(user.name);
    const [nomorIndukUpdate, setNomorIndukUpdate] = useState(user.nomor_induk);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(user.role);

    const roles = ["admin", "sales"];

    const handleUpdate = (e) => {
        e.preventDefault();
        router.put(
            `/user/${user.id}`,
            {
                id: user.id,
                name: nameUpdate,
                nomor_induk: nomorIndukUpdate,
                password: password,
                role: role,
            },
            {
                onSuccess: () => {
                    Swal.fire("Data berhasil update", "", "success");
                },
            }
        );
    };

    return (
        <Template>
            <Head title="InternatApp - Edit Sales" />
            <div className="row">
                <div className="col-7">
                    <div className="card">
                        <div className="card-header font-weight-bold text-primary">
                            Form Edit
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUpdate}>
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
                                        value={nameUpdate}
                                        onChange={(e) =>
                                            setNameUpdate(e.target.value)
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
                                        value={nomorIndukUpdate}
                                        onChange={(e) =>
                                            setNomorIndukUpdate(e.target.value)
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
                                        class="form-control"
                                        placeholder="Masukkan password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <small>
                                        Optional: kolom password dapat
                                        dikosongkan
                                    </small>
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
                                        {roles.map((item) => {
                                            return item == user.role ? (
                                                <option value={item} selected>
                                                    {item
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        item.slice(1)}
                                                </option>
                                            ) : (
                                                <option value={item}>
                                                    {item
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        item.slice(1)}
                                                </option>
                                            );
                                        })}
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
                                        Update
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

export default EditUser;
