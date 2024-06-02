const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

class Login {
  constructor(email, passwd = "") {
    this.DEFAULT_PATH_DIR = path.resolve("./").replace(/\\/g, "/");
    this.DEFAULT_COOKIE_PATH = `${this.DEFAULT_PATH_DIR}/${encodeURIComponent(
      email
    )}.json`;
    this.email = email;
    this.passwd = passwd;
    this.headers = new Headers({
      Referer: "https://huggingface.co/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64",
    });
    this.cookies = {};
  }

  async _requestPost(
    url,
    data = {},
    headers = null,
    params = null,
    stream = false,
    allow_redirects = true
  ) {
    const response = await fetch(url, {
      method: "POST",
      headers: headers ? headers : this.headers,
      body: data ? JSON.stringify(data) : undefined,
      redirect: allow_redirects ? "follow" : "manual",
    });

    if (response.ok) {
      this._updateCookies(response.cookies());
    }

    return response;
  }

  async _signInWithEmail() {
    const url = "https://huggingface.co/login";
    const data = {
      username: this.email,
      password: this.passwd,
    };

    const response = await this._requestPost(url, data, {
      allowRedirects: false,
    });

    if (response.status === 400) {
      throw new Error("Wrong username or password");
    }
  }

  async saveCookiesToDir(cookie_dir_path = "./usercookies") {
    const default_path_dir_path = cookie_dir_path || "./usercookies";
    if (default_path_dir_path.charAt(-1) != "/") {
      cookie_dir_path += "/";
    }

    if (!fs.existsSync(cookie_dir_path)) {
      fs.mkdirSync(cookie_dir_path);
    }

    console.log("cookie store path:" + cookie_dir_path);
  }

  async _saveCookies(cookie_dir_path) {
    return this.saveCookiesToDir(cookie_dir_path);
  }

  async _loadCookies(cookie_dir_path) {
    console.log("_loadCookies: " + cookie_dir_path);
  }

  _getFilePath(directory, filename) {
    if (!directory || !filename) return "";
    if (!fs.existsSync(directory)) fs.mkdirSync(directory);
    return path.resolve(directory, filename);
  }

  _getCookiePath(cookie_dir_path) {
    return this._getFilePath(cookie_dir_path, this.email + ".json");
  }

  async login(cookie_dir_path = null, save_cookies = false) {
    console.log("login : ");
    // Validate cookies content before use
    const cookiePath = this._getCookiePath(cookie_dir_path);
    console.log(cookiePath);

    if (fs.existsSync(cookiePath)) {
      let cookiesData = await this._loadCookies(cookiePath);
      try {
        // Object.entries(cookiesData).forEach((entry) => {
        //   if (["token", "hf-chat"].includes(entry[0]))
        //     throw Error("Invalid Cookies Data");
        // });
      } catch (e) {
        console.log("Error During Validating Cookies");
      }
    } else {
      console.log("cookiePath is not exist");
      throw Error("cookiePath is not exist" + cookie_dir_path);
    }

    this._signInWithEmail();
    let location = this._getAuthUrl();
    //     if(this._grantAuth(location)) {
    //         if(save_cookies) {
    //             this.saveCookies(cookie_dir_path);
    //         }
    //         return this.cookies;
    //     } else {
    //         throw new Error(`Grant Auth Fatal, Please Check Your Email Or Password\nCookies Gained: ${JSON.stringify(this.cookies)}`);
    //     }
  }

  async _getAuthUrl() {
    const url = "https://huggingface.com";
    const headers = {
      Referer: "https://huggingface.com",
      "User-Agent": this.HEADERS["User-Agent"],
      "Content-Type": "application/x-www-form-urlencoded",
    };

    res = await this._request_post(
      (url = url),
      (headers = headers),
      (allow_redirects = False)
    );

    if (res.statusCode == 200) {
    } else if (res.status_code == 303) {
      res_json = await res.json();
      var location = res_json["location"];
    } else {
      throw new Error(
        "No authorize url found, please check your email or password"
      );
    }
  }

  saveCookies(cookie_dir_path = null) {
    return this._saveCookies(cookie_dir_path);
  }

  loadCookies(cookie_dir_path = null) {
    return this._loadCookies(cookie_dir_path);
  }

  // async _requestGet(url, params = {}, options = {}) {
  //     let response = await fetch(url, {...options, method: 'GET', headers: this.headers});
  //     response.cookies && this._updateCookies(response.cookies);
  //     return response;
  // }

  // async _requestPost(url, options = {}) {
  //     let response = await fetch(url, {...options, method: 'POST', headers: this.headers});
  //     response.cookies && this._updateCookies(response.cookies);
  //     return response;
  // }

  // _updateCookies(cookies) {
  //     Object.assign(this.cookies, cookies);
  // }

  // _getAuthUrl() {
  //     /* Logic here */
  // }

  // _grantAuth(url) {
  //     /* Logic here */
  // }
}

module.exports = Login;
