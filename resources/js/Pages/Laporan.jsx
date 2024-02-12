import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";
import Template from "@/Layout/Template";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";

const Laporan = () => {
    const { customerInvoice } = usePage().props;

    const doc = jsPDF(); // Class Library jsPDF

    const generetePdf = () => {
        doc.text("Laporan Invoice Home Internet", 15, 10);
        doc.autoTable({ html: "#table" });
        doc.save("invoice.pdf");
    };

    let total = 0;

    return (
        <Template>
            <Head title="InternetApp - Laporan Invoice" />
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Laporan Invoice</h1>
            </div>
            <div className="row">
                <div className="col-xl-12 ">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center text-primary font-weight-bold">
                            Data Invoice Home Internet
                            <button
                                class="btn btn-primary"
                                onClick={generetePdf}
                            >
                                <i class="fas fa-regular fa-file-pdf mr-2"></i>
                                Generete PDF
                            </button>
                        </div>
                        <div className="card-body">
                            <table class="table table-borderd" id="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Customer</th>
                                        <th>Paket</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerInvoice.map((item, index) => {
                                        total += item.harga;
                                        return (
                                            <tr>
                                                <td>{(index += 1)}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    {item.nama_paket}{" "}
                                                    {item.fasilitas}
                                                </td>
                                                <td>Rp. {item.harga}</td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td
                                            colspan="3"
                                            align="right"
                                            style={{
                                                fontSize: 18,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Total:
                                        </td>
                                        <td>Rp. {total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Laporan;
