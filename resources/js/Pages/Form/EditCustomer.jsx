import React, { useState } from "react";
import { Link, usePage, router, Head } from "@inertiajs/react";
import Template from "@/Layout/Template";

const EditCustomer = () => {
    const { customer } = usePage().props;

    const [nameUpdate, setNameUpdate] = useState(customer.name);
    const [emailUpdate, setEmailUpdate] = useState(customer.email);
    const [nomorTeleponUpdate, setNomorTeleponUpdate] = useState(
        customer.nomor_telepon
    );
    const [alamatUpdate, setAlamatUpdate] = useState(customer.alamat);

    const handleUpdate = (e) => {
        e.preventDefault();
        router.put(
            `/customer/${customer.id}`,
            {
                name: nameUpdate,
                email: emailUpdate,
                nomor_telepon: nomorTeleponUpdate,
                alamat: alamatUpdate,
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
            <Head title="InventoryApp - Edit Customer" />
            {/* Page Heading  */}
            <div className="row">
                <div className="col-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="font-weight-bold text-primary">
                                Form
                            </h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUpdate}>
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
                                        value={nameUpdate}
                                        onChange={(e) =>
                                            setNameUpdate(e.target.value)
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
                                        value={emailUpdate}
                                        onChange={(e) =>
                                            setEmailUpdate(e.target.value)
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
                                        value={nomorTeleponUpdate}
                                        onChange={(e) =>
                                            setNomorTeleponUpdate(
                                                e.target.value
                                            )
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
                                        value={alamatUpdate}
                                        onChange={(e) =>
                                            setAlamatUpdate(e.target.value)
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

export default EditCustomer;
