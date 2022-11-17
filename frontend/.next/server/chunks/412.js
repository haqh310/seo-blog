"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 9110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* binding */ isAuth),
/* harmony export */   "IU": () => (/* binding */ signup),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "YR": () => (/* binding */ authenticate),
/* harmony export */   "_y": () => (/* binding */ handleResponse),
/* harmony export */   "c0": () => (/* binding */ resetPassword),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "gF": () => (/* binding */ forgotPassword),
/* harmony export */   "uf": () => (/* binding */ signout),
/* harmony export */   "xJ": () => (/* binding */ signin)
/* harmony export */ });
/* unused harmony exports setCookie, removeCookie, setLocalStorage, removeLocalStorage */
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handleResponse = (response)=>{
    if (response.status === 401) {
        signout(()=>{
            Router.push({
                pathname: "/signin",
                query: {
                    message: "Your session is expired. Please signin"
                }
            });
        });
    }
};
const signup = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const signin = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const signout = (next)=>{
    removeCookie("token");
    removeLocalStorage("user");
    next();
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signout`, {
        method: "GET"
    }).then((response)=>{
        console.log("signout success");
    }).catch((err)=>console.log(err));
};
// get cookie
const setCookie = (key, value)=>{
    if (false) {}
};
// remove cookie
const removeCookie = (key, value)=>{
    if (false) {}
};
// get cookie
const getCookie = (key)=>{
    if (false) {}
};
// localstorage
const setLocalStorage = (key, value)=>{
    if (false) {}
};
// remove localstorage
const removeLocalStorage = (key)=>{
    if (false) {}
};
// autheticate user by pass data to cookie and localstorage
const authenticate = (data, next)=>{
    setCookie("token", data.token);
    setLocalStorage("user", data.user);
    next();
};
const isAuth = ()=>{
    if (false) {}
};
const updateUser = (user, next)=>{
    if (false) {}
};
const forgotPassword = (email)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/forgot-password`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const resetPassword = (resetInfo)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/reset-password`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resetInfo)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ singleBlog),
/* harmony export */   "FH": () => (/* binding */ listBlogsWithCategoriesAndTags),
/* harmony export */   "T7": () => (/* binding */ removeBlog),
/* harmony export */   "Vh": () => (/* binding */ createBlog),
/* harmony export */   "W1": () => (/* binding */ listRelated),
/* harmony export */   "mx": () => (/* binding */ listSearch),
/* harmony export */   "pb": () => (/* binding */ list),
/* harmony export */   "zZ": () => (/* binding */ updateBlog)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3346);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth__WEBPACK_IMPORTED_MODULE_3__]);
_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const createBlog = (blog, token)=>{
    let createBlogEndpoint;
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 1) {
        createBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blog`;
    } else if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 0) {
        createBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/user/blog`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${createBlogEndpoint}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: blog
    }).then((response)=>{
        console.log(response);
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};
const listBlogsWithCategoriesAndTags = (skip, limit)=>{
    const data = {
        limit,
        skip
    };
    return fetch(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blogs-categories-tags`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const singleBlog = (slug = undefined)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blog/${slug}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const listRelated = (blog)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blogs/related`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const list = (username)=>{
    let listBlogEndpoint;
    if (username) {
        listBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/${username}/blogs`;
    } else {
        listBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blogs`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${listBlogEndpoint}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const removeBlog = (slug, token)=>{
    let deleteBlogEndpoint;
    let auth = (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)();
    if (auth) {
        if (auth.role === 1) {
            deleteBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blog/${slug}`;
        } else {
            deleteBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/user/blog/${slug}`;
        }
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${deleteBlogEndpoint}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};
const updateBlog = (blog, token, slug)=>{
    let updateBlogEnd;
    let auth = (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)();
    if (auth) {
        if (auth.role === 1) {
            updateBlogEnd = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blog/${slug}`;
        } else {
            updateBlogEnd = `${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/user/blog/${slug}`;
        }
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${updateBlogEnd}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};
const listSearch = (params)=>{
    console.log("search param ", params);
    let query = query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(params);
    console.log("query param ", params);
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/blogs/search?${query}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3346);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9110);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7269);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4204);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blog_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_auth__WEBPACK_IMPORTED_MODULE_4__, reactstrap__WEBPACK_IMPORTED_MODULE_5__, _blog_Search__WEBPACK_IMPORTED_MODULE_9__]);
([_actions_auth__WEBPACK_IMPORTED_MODULE_4__, reactstrap__WEBPACK_IMPORTED_MODULE_5__, _blog_Search__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeStart) = (url)=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeComplete) = (url)=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
(next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeError) = (url)=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
const Header = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const btnStyle = {
        "cursor": "pointer"
    };
    const toggle = ()=>setIsOpen(!isOpen);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAuth((0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)());
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {
                color: "light",
                light: true,
                expand: "md",
                className: "px-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                        href: "/",
                        className: "font-weight-bold text-dark",
                        children: _config__WEBPACK_IMPORTED_MODULE_3__/* .APP_NAME */ .iC
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavbarToggler, {
                        onClick: toggle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
                        isOpen: isOpen,
                        navbar: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
                            className: "ml-auto",
                            navbar: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                href: "/blogs",
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                }),
                                !auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                        href: "/signin",
                                        children: "Signin"
                                    })
                                }) : auth.role === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                        href: "/user",
                                        children: `${auth.name}'s Dashboard`
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                        href: "/admin",
                                        children: `${auth.name}'s Dashboard`
                                    })
                                }),
                                auth && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                        style: btnStyle,
                                        onClick: ()=>(0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .signout */ .uf)(()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().replace("/signin")),
                                        children: "Signout"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        href: {
                                            pathname: "/user/crud/blog"
                                        },
                                        className: "btn btn-primary text-light",
                                        children: "Write a blog"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blog_Search__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_blog__WEBPACK_IMPORTED_MODULE_3__]);
_actions_blog__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Search = ()=>{
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        search: undefined,
        results: [],
        searched: false,
        message: ""
    });
    const { search , results , searched , message  } = values;
    const searchedBlogs = (results = [])=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jumbotron bg-white",
            children: [
                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "pt-4 text-muted font-italic",
                    children: message
                }),
                results.map((blog, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `/blogs/${blog.slug}`,
                            className: "text-primary",
                            children: blog.title
                        })
                    }, i))
            ]
        });
    };
    const searchForm = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: searchSubmit,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "search",
                            className: "form-control",
                            placeholder: "Search blogs",
                            onChange: handleChange
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-block btn-outline-primary",
                            type: "submit",
                            children: "Search"
                        })
                    })
                ]
            })
        });
    const searchSubmit = (e)=>{
        e.preventDefault();
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_3__/* .listSearch */ .mx)({
            search
        }).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({
                    ...values,
                    results: data,
                    searched: true,
                    message: `${data.length} blogs found.`
                });
            }
        });
    };
    const handleChange = (e)=>{
        setValues({
            ...values,
            search: e.target.value,
            searched: false,
            results: []
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-fluid",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-3 pb-5",
                children: searchForm()
            }),
            searched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginTop: "-120px",
                    marginBottom: "-80px"
                },
                children: searchedBlogs(results)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ DISQUS_SHORTNAME),
/* harmony export */   "bl": () => (/* binding */ API),
/* harmony export */   "f6": () => (/* binding */ FB_APP_ID),
/* harmony export */   "iC": () => (/* binding */ APP_NAME),
/* harmony export */   "yK": () => (/* binding */ DOMAIN)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const APP_NAME = publicRuntimeConfig.APP_NAME ? publicRuntimeConfig.APP_NAME : "SEOBLOG";
const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;


/***/ })

};
;