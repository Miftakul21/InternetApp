import React, { useEffect, useState } from "react";
import { Link, usePage, Head, router } from "@inertiajs/react";
import Template from "@/Layout/Template";
import DataTable from "react-data-table-component";
import BeatLoader from "react-spinners/BeatLoader";

const CustomerInvoice = () => {
    const { customerInvoice } = usePage().props;
    const [pendding, setPendding] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            // setRows(user);
            setPendding(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, []);

    const columns = [
        {
            name: "Nama",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Paket Home Internet",
            selector: (row) => row.nama_paket,
            sortable: true,
        },
        {
            name: "harga",
            selector: (row) => "Rp. " + row.harga,
            sortable: true,
        },
        {
            name: "Image KTP",
            selector: (row) => (
                <div style={{ width: 100, height: 80 }}>
                    <img
                        src={`../../../foto_ktp/${row.image_ktp}`}
                        alt="foto-ktp"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </div>
            ),
        },
        {
            name: "Image Rumah",
            selector: (row) => (
                <div style={{ width: 100, height: 80 }}>
                    <img
                        src={`../../../foto_rumah/${row.image_rumah}`}
                        alt="foto-ktp"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                        }}
                    />
                </div>
            ),
        },
        {
            name: "Status",
            selector: (row) => (
                <button className={handleColor(row.status_invoice)}>
                    {row.status_invoice[0].toUpperCase() +
                        row.status_invoice.slice(1)}
                </button>
            ),
            sortable: true,
        },
        {
            name: "Keterangan",
            selector: (row) => row.keterangan,
            sortable: true,
        },
        {
            name: "Aksi",
            selector: (row) => (
                <button
                    class="btn btn-danger btn-sm"
                    onClick={() => confirmDelete(row.id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            ),
        },
    ];

    const handleColor = (status) => {
        if (status == "pendding") {
            return "btn btn-warning";
        }

        if (status == "approve") {
            return "btn btn-primary";
        }

        if (status == "rejected") {
            return "btn btn-danger";
        }
    };

    // Custom style table
    const styleTable = {
        headCells: {
            style: {
                fontSize: 14,
                fontWeight: 600,
            },
        },
    };

    const confirmDelete = (id) => {
        Swal.fire({
            title: "Ingin hapus?",
            text: "Data yang dihapus, tidak bisa kembali",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/customer-invoice/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Hapus!",
                            text: "Data berhasil hapus",
                            icon: "success",
                        });
                    },
                });
            }
        });
    };

    return (
        <Template>
            <Head title="InternetApp - Customer Invoice" />
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Customer Invoice</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 class="fw-bold font-weight-bold text-primary">
                                Customer Invoice
                            </h6>
                            <Link
                                href="/customer-invoice/create"
                                class="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus mr-2"></i>Tambah
                            </Link>
                        </div>
                        <div className="card-body">
                            <DataTable
                                columns={columns}
                                data={customerInvoice}
                                customStyles={styleTable}
                                progressPending={pendding}
                                progressComponent={
                                    <BeatLoader
                                        color={"#596EEE"}
                                        size={10}
                                        aria-label="Loading"
                                    />
                                }
                                pagination
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default CustomerInvoice;
