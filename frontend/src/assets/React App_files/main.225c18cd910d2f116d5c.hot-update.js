webpackHotUpdate("main",{

/***/ "./src/components/allsongs/AllSongs.js":
/*!*********************************************!*\
  !*** ./src/components/allsongs/AllSongs.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_songs_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/songs.css */ "./src/css/songs.css");
/* harmony import */ var _css_songs_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_songs_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _songitem_SongItemContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../songitem/SongItemContainer */ "./src/components/songitem/SongItemContainer.js");






var _jsxFileName = "/Users/dianagaona/Desktop/pursuitwork/6unit/song_app/frontend/src/components/allsongs/AllSongs.js";






var AllSongs =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AllSongs, _Component);

  function AllSongs() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AllSongs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AllSongs)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      searchInput: "",
      search: "",
      songs: _this.props.songs,
      songSearchResults: [],
      commentInput: ""
    };

    _this.handleChange = function (e) {
      var _this$setState;

      var searchResult = _this.state.songs.filter(function (song) {
        return song.title.toLowerCase().includes(e.target.value.toLowerCase());
      });

      _this.setState((_this$setState = {}, Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$setState, e.target.name, e.target.value), Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$setState, "songSearchResults", searchResult), _this$setState));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          searchInput = _this$state.searchInput,
          songs = _this$state.songs,
          search = _this$state.search;
      var songResults = songs.filter(function (songs) {
        return songs.title.toLowerCase().includes(search.toLowerCase());
      });

      _this.setState({
        search: searchInput,
        searchInput: "",
        searchResults: songResults
      });
    };

    _this.searchForSongs = function (songsList) {
      var search = _this.this.state.search;

      if (search === "") {
        return songsList;
      } else {
        return songsList.filter(function (song) {
          return song.title.toLowerCase().includes(search.toLowerCase());
        });
      }
    };

    _this.displaySongs = function () {
      var songs = _this.props.songs;
      var songsList = songs.map(function (song) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_songitem_SongItemContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          songID: song.id,
          song_img: song.img_url,
          song_title: song.title,
          userID: song.user_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, songsList);
    };

    return _this;
  }

  Object(_Users_dianagaona_Desktop_pursuitwork_6unit_song_app_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AllSongs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAllSongs(); // this.props.getAllUsers();
      // this.props.getAllFavorites();
      // this.props.getAllGenres();
      // this.props.getAllComments();
    }
  }, {
    key: "render",
    // displayAllSongs = songs => {
    //   return this.props.songs.map(song => {
    //     return (
    //       <div key={song.id} className="songs_container">
    //         <div className="songs_left">
    //           <img src={song.img_url} alt="" className="songs_img" />
    //         </div>
    //         <div className="songs_right">
    //           <div className="songs_title">
    //             <div>
    //               <h3>{song.title}</h3>
    //             </div>
    //             <div className="songs_favorite">
    //               <p>{song.favorites} favorites</p>
    //               <button>Favorite</button>
    //             </div>
    //           </div>
    //           <div className="songs_poster">
    //             <Link to={`/users/${song.poster_id}`}>{song.poster}</Link>
    //             <span className="songs_separator">·</span>
    //             <p>{song.genre}</p>
    //           </div>
    //           <div className="songs_comments">
    //             <div>{song.comments}</div>
    //           </div>
    //           <div className="songs_form">
    //             <form className="form">
    //               <input
    //                 type="text"
    //                 placeholder="Comment"
    //                 className="form_input"
    //               />
    //               <button className="form_button">Add Comment</button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   });
    // };
    value: function render() {
      console.log(this.props, "PROPS IN ALL SONGS");
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "page_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Search By Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "search",
        value: this.state.search,
        onChange: this.handleChange,
        placeholder: "Title",
        className: "form_input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "form_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "songs_maindiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.displaySongs()));
    }
  }]);

  return AllSongs;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AllSongs);

/***/ })

})
//# sourceMappingURL=main.225c18cd910d2f116d5c.hot-update.js.map