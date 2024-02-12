import React from "react";
import { Link, usePage, router } from "@inertiajs/react";
import $ from "jquery";

const Template = ({ children }) => {
    const { url } = usePage();
    const { auth } = usePage().props;

    const handleLogout = () => {
        router.post("/logout");
        $(".modal-backdrop").remove();
        $("body").removeClass("modal-open");
    };

    return (
        <>
            <div id="wrapper">
                {/* Sidebar */}
                <ul
                    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                    style={{
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                    }}
                >
                    {/* Sidebar - Brand */}
                    <a
                        class="sidebar-brand d-flex align-items-center justify-content-center"
                        href="/dashboard"
                    >
                        <div class="sidebar-brand-icon ">
                            <i class="fas fa-wifi"></i>
                        </div>
                        <div class="sidebar-brand-text mx-1">Home Internet</div>
                    </a>

                    {/* Divider */}
                    <hr class="sidebar-divider my-0" />

                    {/* Heading */}

                    {auth.user.role == "admin" ? (
                        <>
                            <div class="sidebar-heading mt-3">
                                Administrator
                            </div>
                            {/* Nav Item - Dashboard  */}
                            <li
                                className={
                                    url === "/dashboard"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a class="nav-link" href="/dashboard">
                                    <i class="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            {/* Nav Item - Charts */}
                            <li
                                className={
                                    url === "/user"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link class="nav-link" href="/user">
                                    <i class="fas fa-fw fa-user-tag"></i>
                                    <span>User</span>
                                </Link>
                            </li>

                            {/* Nav Item - Charts */}
                            <li
                                className={
                                    url === "/paket-internet"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link class="nav-link" href="/paket-internet">
                                    <i class="fas fa-fw fa-globe"></i>
                                    <span>Internet</span>
                                </Link>
                            </li>

                            {/* Nav Item - Pages Collapse Menu */}
                            <li class="nav-item">
                                <a
                                    class="nav-link collapsed"
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseTwo"
                                >
                                    <i class="fas fa-fw fa-user-check"></i>
                                    <span>Customer Invoice</span>
                                </a>
                                <div
                                    id="collapseTwo"
                                    class="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionSidebar"
                                >
                                    <div class="bg-white py-2 collapse-inner rounded">
                                        <h6 class="collapse-header">
                                            Daftar Invoice
                                        </h6>
                                        <Link
                                            class="collapse-item"
                                            href="/invoice"
                                        >
                                            Customer Invoice
                                        </Link>
                                        <Link
                                            class="collapse-item"
                                            href="/invoice-approved"
                                        >
                                            Invoice Approve
                                        </Link>
                                        <Link
                                            class="collapse-item"
                                            href="/invoice-rejected"
                                        >
                                            Invoice Rejected
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/* Nav Item - Charts */}
                            <li
                                className={
                                    url === "/laporan-invoice"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link class="nav-link" href="/laporan-invoice">
                                    <i class="fas fa-fw fa-file-alt"></i>
                                    <span>Laporan invoice</span>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <div class="sidebar-heading mt-3">Sales</div>
                            {/* Nav Item - Dashboard  */}
                            <li
                                className={
                                    url === "/dashboard"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a class="nav-link" href="/dashboard">
                                    <i class="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li
                                className={
                                    url === "/customer"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a class="nav-link" href="/customer">
                                    <i class="fas fa-fw fa-users"></i>
                                    <span>Customer</span>
                                </a>
                            </li>
                            <li
                                className={
                                    url === "/customer-invoice"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a
                                    href="/customer-invoice"
                                    className="nav-link"
                                >
                                    <i class="fas fa-user-tag"></i>
                                    <span>Customer Invoice</span>
                                </a>
                            </li>
                        </>
                    )}
                </ul>
                {/* End of Sidebar */}

                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button
                                id="sidebarToggleTop"
                                class="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* Topbar Navbar */}
                            <ul class="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="searchDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* Dropdown - Messages */}
                                    <div
                                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown"
                                    >
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input
                                                    type="text"
                                                    class="form-control bg-light border-0 small"
                                                    placeholder="Search for..."
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div class="input-group-append">
                                                    <button
                                                        class="btn btn-primary"
                                                        type="button"
                                                    >
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <div class="topbar-divider d-none d-sm-block"></div>

                                {/* Nav Item - User Information  */}
                                <li class="nav-item dropdown no-arrow">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                            {auth.user.name}
                                        </span>
                                        <i
                                            className="fas fa-user-circle"
                                            style={{ fontSize: 28 }}
                                        ></i>
                                    </a>
                                    {/* Dropdown - User Information  */}
                                    <div
                                        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown"
                                    >
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a
                                            class="dropdown-item text-danger"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#logoutModal"
                                        >
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-danger"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar  */}

                        {/* Begin Page Content  */}
                        <div class="container-fluid">{children}</div>
                        {/* /.container-fluid  */}
                    </div>
                    {/* End of Main Content  */}

                    {/* Footer  */}
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Aplikasi Home Internet</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer  */}
                </div>
                {/* End of Content Wrapper  */}
            </div>

            {/* End of Page Wrapper */}
            {/* Scroll to Top Button */}

            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>
            <div
                class="modal fade"
                id="logoutModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Logout
                            </h5>
                            <button
                                class="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            Anda Ingin Logout?
                        </div>
                        <div class="modal-footer">
                            <button
                                class="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                class="btn btn-danger"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template;
