import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Template from "@/Layout/Template";

const CreateInternet = () => {
    const [namaPaket, setNamaPaket] = useState("");
    const [kecepatan, setKecepatan] = useState("");
    const [harga, setHarga] = useState("");
    const [fasilitas, setFasilitas] = useState("");

    const { errors } = usePage().props;

    const handleStore = (e) => {
        e.preventDefault();
        router.post(
            "/paket-internet",
            {
                nama_paket: namaPaket,
                kecepatan: kecepatan,
                harga: harga,
                fasilitas: fasilitas,
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
            <Head title="InternatApp - Tambah Paket Internet" />
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
                                        value={namaPaket}
                                        onChange={(e) =>
                                            setNamaPaket(e.target.value)
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
                                        value={kecepatan}
                                        onChange={(e) =>
                                            setKecepatan(e.target.value)
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
                                        value={harga}
                                        onChange={(e) =>
                                            setHarga(e.target.value)
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
                                        onChange={(e) =>
                                            setFasilitas(e.target.value)
                                        }
                                    ></textarea>
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
                                        Simpan
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

export default CreateInternet;
