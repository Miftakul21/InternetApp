import React, { useState } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import Template from "@/Layout/Template";

const CreateCustomer = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nomorTelepon, setNomorTelepon] = useState();
    const [alamat, setAlamat] = useState();

    const handleStore = (e) => {
        e.preventDefault();
        router.post(
            "/customer",
            {
                name: name,
                email: email,
                nomor_telepon: nomorTelepon,
                alamat: alamat,
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
            <Head title="InventoryApp - Tambah Customer" />
            <div className="row">
                <div className="col-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="font-weight-bold text-primary">
                                Form
                            </h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleStore}>
                                <div className="form-group">
                                    <label
                                        htmlFor="nama"
                                        class="font-weight-bold"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        class="form-control"
                                        placeholder="Masukkan nama"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="email"
                                        class="font-weight-bold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        class="form-control"
                                        placeholder="Masukkan email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="nomor_telepon"
                                        class="font-weight-bold"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        id="nomor_telepon"
                                        class="form-control"
                                        placeholder="Masukkan nomor telepon"
                                        value={nomorTelepon}
                                        onChange={(e) =>
                                            setNomorTelepon(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="alamat"
                                        class="font-weight-bold"
                                    >
                                        Alamat
                                    </label>
                                    <input
                                        type="text"
                                        id="alamat"
                                        class="form-control"
                                        placeholder="Masukkan nomor alamat"
                                        value={alamat}
                                        onChange={(e) =>
                                            setAlamat(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <button class="btn btn-primary mr-2">
                                        Update
                                    </button>
                                    <Link
                                        href="/customer"
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

export default CreateCustomer;
