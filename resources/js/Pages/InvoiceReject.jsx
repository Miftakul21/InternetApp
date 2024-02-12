import React, { useEffect, useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Template from "@/Layout/Template";
import DataTable from "react-data-table-component";
import BeatLoader from "react-spinners/BeatLoader";

const InvoiceReject = () => {
    const { customerInvoice } = usePage().props;
    const [pendding, setPendding] = useState(true);
    console.log(customerInvoice);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setPendding(false);
        }, 1000);
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
            <Head title="InternetApp - Invoice" />
            {/* Page Heading  */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Invoice Home Internet</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-primary">
                            Data Invoice Rejected
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

export default InvoiceReject;
