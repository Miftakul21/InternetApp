import React, { useState, useEffect } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Template from "@/Layout/Template";
import DataTable from "react-data-table-component";
import BeatLoader from "react-spinners/BeatLoader";

const Internet = () => {
    const { paketInternet } = usePage().props;
    const [pendding, setPendding] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setPendding(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, []);

    const columns = [
        {
            name: "Nama Paket",
            selector: (row) => row.nama_paket,
            sortable: true,
        },
        {
            name: "Kecepatan",
            selector: (row) => row.kecepatan + " Mbps",
            sortable: true,
        },
        {
            name: "Harga",
            selector: (row) => "Rp. " + row.harga + " / bulan",
            sortable: true,
        },
        {
            name: "Fasilitas",
            selector: (row) => row.fasilitas,
            sortable: true,
        },
        {
            name: "Aksi",
            selector: (row) => (
                <>
                    <Link
                        href={`/paket-internet/${row.id}/edit`}
                        class="btn btn-warning btn-sm mr-2"
                    >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => confirmDelete(row.id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </>
            ),
        },
    ];

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
                router.delete(`/paket-internet/${id}`);
                Swal.fire({
                    title: "Hapus!",
                    text: "Data berhasil hapus",
                    icon: "success",
                });
            }
        });
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

    return (
        <Template>
            <Head title="InternetApp - Paket Internet" />
            {/* Page Heading  */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Paket Internet</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 class="font-weight-bold text-primary">
                                Data Paket
                            </h6>
                            <Link
                                href="/paket-internet/create"
                                class="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus mr-2"></i>Tambah
                            </Link>
                        </div>
                        <div className="card-body">
                            <DataTable
                                columns={columns}
                                data={paketInternet}
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

export default Internet;
