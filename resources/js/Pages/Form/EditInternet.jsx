import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Template from "@/Layout/Template";

const EditInternet = () => {
    const { paketInternet } = usePage().props;
    const { errors } = usePage().props;

    console.log(paketInternet);

    const [namaPaketUpdate, setNamaPaketUpdate] = useState(
        paketInternet.nama_paket
    );
    const [kecepatanUpdate, setKecepatanUpdate] = useState(
        paketInternet.kecepatan
    );
    const [hargaUpdate, setHargaUpdate] = useState(paketInternet.harga);
    const [fasilitasUpdate, setFasilitasUpdate] = useState(
        paketInternet.fasilitas
    );

    const handleStore = (e) => {
        e.preventDefault();
        router.put(
            `/paket-internet/${paketInternet.id}`,
            {
                nama_paket: namaPaketUpdate,
                kecepatan: kecepatanUpdate,
                harga: hargaUpdate,
                fasilitas: fasilitasUpdate,
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
            <Head title="InternatApp - Update Paket Internet" />
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
                                        for="nama_paket"
                                        class="form-label font-weight-bold"
                                    >
                                        Nama Paket Internet
                                    </label>
                                    <input
                                        type="text"
                                        id="nama_paket"
                                        className={
                                            errors.nama_paket
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan nama paket"
                                        value={namaPaketUpdate}
                                        onChange={(e) =>
                                            setNamaPaketUpdate(e.target.value)
                                        }
                                    />
                                    {errors.nama_paket && (
                                        <div class="invalid-feedback">
                                            {errors.nama_paket}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="kecepatan"
                                        class="form-label font-weight-bold"
                                    >
                                        Kecepatan Internet
                                    </label>
                                    <input
                                        type="text"
                                        id="kecepatan"
                                        className={
                                            errors.kecepatan
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan kecepatan paket internet"
                                        value={kecepatanUpdate}
                                        onChange={(e) =>
                                            setKecepatanUpdate(e.target.value)
                                        }
                                    />
                                    {errors.kecepatan && (
                                        <div class="invalid-feedback">
                                            {errors.kecepatan}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="harga"
                                        class="form-label font-weight-bold"
                                    >
                                        Harga
                                    </label>
                                    <input
                                        type="number"
                                        id="harga"
                                        min="0"
                                        className={
                                            errors.harga
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        placeholder="Masukkan harga"
                                        value={hargaUpdate}
                                        onChange={(e) =>
                                            setHargaUpdate(e.target.value)
                                        }
                                    />
                                    {errors.harga && (
                                        <div class="invalid-feedback">
                                            {errors.harga}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label
                                        for="fasilitas_paket"
                                        class="form-label font-weight-bold"
                                    >
                                        Fasilitas Paket
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="fasilitas_paket"
                                        placeholder="Masukkan fasilitas paket"
                                        value={fasilitasUpdate}
                                        onChange={(e) =>
                                            setFasilitasUpdate(e.target.value)
                                        }
                                    >
                                        {fasilitasUpdate ?? ""}
                                    </textarea>
                                    {errors.fasilitas && (
                                        <div class="invalid-feedback">
                                            {errors.fasilitas}
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
                                        href="/sales"
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

export default EditInternet;
