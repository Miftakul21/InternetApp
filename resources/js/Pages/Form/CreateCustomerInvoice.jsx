import React, { useState, useRef } from "react";
import { Link, Head, usePage, useForm, router } from "@inertiajs/react";
import Template from "@/Layout/Template";

const CreateCustomerInvoice = () => {
    const { customer } = usePage().props;
    const { paketInternet } = usePage().props;
    const { errors } = usePage().props;

    const image_ktp = useRef();
    const image_rumah = useRef();

    const [values, setValues] = useState({
        id_customer: "",
        id_paket_internet: "",
        tanggal: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleStore = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("id_customer", values.id_customer);
        formData.append("id_paket_internet", values.id_paket_internet);
        formData.append("tanggal", values.tanggal);
        formData.append("image_ktp", image_ktp.current.files[0]);
        formData.append("image_rumah", image_rumah.current.files[0]);

        router.post("/customer-invoice", formData);
    };

    let paketHome = "";

    return (
        <Template>
            <Head />
            <div className="row">
                <div className="col-8">
                    <div className="card">
                        <div className="card-header">Form</div>
                        <div className="card-body">
                            <form
                                onSubmit={handleStore}
                                encType="multipart/form-data"
                            >
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="tanggal">
                                                Tanggal
                                            </label>
                                            <input
                                                type="date"
                                                className={
                                                    errors.tanggal
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                name="tanggal"
                                                value={values.tanggal}
                                                onChange={handleChange}
                                            />
                                            {errors.tanggal && (
                                                <div class="invalid-feedback">
                                                    {errors.tanggal}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customer">
                                            Customer
                                        </label>
                                        <select
                                            name="id_customer"
                                            id="customer"
                                            className={
                                                errors.id_customer
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={handleChange}
                                        >
                                            <option selected>Customer</option>
                                            {customer.map((customer, index) => {
                                                return (
                                                    <option value={customer.id}>
                                                        {customer.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        {errors.id_customer && (
                                            <div class="invalid-feedback">
                                                {errors.id_customer}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="paket_home">
                                                Pilih Paket Internet
                                            </label>
                                            <select
                                                name="id_paket_internet"
                                                id="paket_home"
                                                className={
                                                    errors.id_paket_internet
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                onChange={handleChange}
                                            >
                                                <option selected>
                                                    Paket Home
                                                </option>
                                                {paketInternet.map(
                                                    (paket, index) => {
                                                        paketHome =
                                                            paket.nama_paket +
                                                            " " +
                                                            paket.kecepatan +
                                                            " Mbps " +
                                                            paket.fasilitas;

                                                        return (
                                                            <option
                                                                value={paket.id}
                                                            >
                                                                {paketHome}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </select>
                                            {errors.id_paket_internet && (
                                                <div class="invalid-feedback">
                                                    {errors.id_paket_internet}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="foto_ktp"
                                                className="form-label"
                                            >
                                                Upload Foto Ktp
                                            </label>
                                            <input
                                                id="foto_ktp"
                                                type="file"
                                                className={
                                                    errors.image_ktp
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                name="foto_ktp"
                                                ref={image_ktp}
                                            />
                                            <small>Upload file max: 2mb</small>
                                            {errors.image_ktp && (
                                                <div class="invalid-feedback">
                                                    {errors.image_ktp}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="foto_rumah"
                                                className="form-label"
                                            >
                                                Upload Foto Rumah
                                            </label>
                                            <input
                                                id="foto_rumah"
                                                type="file"
                                                className={
                                                    errors.image_rumah
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                name="foto_rumah"
                                                ref={image_rumah}
                                            />
                                            <small>Upload file max: 2mb</small>
                                            {errors.image_rumah && (
                                                <div class="invalid-feedback">
                                                    {errors.image_rumah}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button class="btn btn-primary mr-2">
                                            Simpan
                                        </button>
                                        <Link
                                            href="/customer-invoice"
                                            class="btn btn-secondary"
                                        >
                                            Batal
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default CreateCustomerInvoice;
