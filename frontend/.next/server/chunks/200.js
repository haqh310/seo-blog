"use strict";
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 6200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9110);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_auth__WEBPACK_IMPORTED_MODULE_4__, _actions_blog__WEBPACK_IMPORTED_MODULE_5__]);
([_actions_auth__WEBPACK_IMPORTED_MODULE_4__, _actions_blog__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BlogRead = ({ username  })=>{
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const token = (0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .getCookie */ .ej)("token");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        loadBlogs();
    }, []);
    const loadBlogs = ()=>{
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_5__/* .list */ .pb)(username).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };
    const deleteConfirm = (slug)=>{
        let answer = window.confirm("Are you sure you want delete your blog?");
        if (answer) {
            deleteBlog(slug);
        }
    };
    const deleteBlog = (slug)=>{
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_5__/* .removeBlog */ .T7)(slug, token).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };
    const showUpdateButton = (blog)=>{
        const auth = (0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)();
        if (auth) {
            if (auth.role === 0) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/user/crud/${blog.slug}`,
                    className: "ml-2 btn btn-sm btn-warning",
                    children: "Update"
                });
            } else {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/admin/crud/${blog.slug}`,
                    className: "ml-2 btn btn-sm btn-warning",
                    children: "Update"
                });
            }
        }
    };
    const showAllBlogs = ()=>{
        return blogs.map((blog, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: blog.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mark",
                        children: [
                            "Written by ",
                            blog.postedBy.name,
                            " | Published on",
                            " ",
                            moment__WEBPACK_IMPORTED_MODULE_1___default()(blog.updatedAt).fromNow()
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-sm btn-danger",
                        onClick: ()=>deleteConfirm(blog.slug),
                        children: "Delete"
                    }),
                    showUpdateButton(blog)
                ]
            }, i));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-12",
                children: [
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "alert alert-warning",
                        children: message
                    }),
                    showAllBlogs()
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogRead);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;