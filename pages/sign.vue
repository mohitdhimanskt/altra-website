<template>
  <div data-server-rendered="true">
    
    <!---->
    <div id="logreg-forms">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
          Sign in
        </h1>
        <div class="social-login">
          <button class="btn facebook-btn social-btn" type="button">
            <span><i class="fa fa-facebook-f"></i> Sign in with Facebook</span>
          </button>
          <button class="btn google-btn social-btn" type="button">
            <span><i class="fa fa-google-plus"></i> Sign in with Google+</span>
          </button>
        </div>
        <p style="text-align:center">OR</p>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />

        <button class="btn btn-success btn-block" type="submit">
          <i class="fa fa-sign-in"></i> Sign in
        </button>
        <a href="#" id="forgot_pswd">Forgot password?</a>
        <hr />
        <!-- <p>Don't have an account!</p>  -->
        <button class="btn btn-primary btn-block" type="button" id="btn-signup">
          <i class="fa fa-user-plus"></i> Sign up New Account
        </button>
      </form>

      <form action="/reset/password/" class="form-reset">
        <input
          type="email"
          id="resetEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <button class="btn btn-primary btn-block" type="submit">
          Reset Password
        </button>
        <a href="#" id="cancel_reset"><i class="fa fa-angle-left"></i> Back</a>
      </form>

      <form action="/signup/" class="form-signup">
        <div class="social-login">
          <button class="btn facebook-btn social-btn" type="button">
            <span><i class="fa fa-facebook-f"></i> Sign up with Facebook</span>
          </button>
        </div>
        <div class="social-login">
          <button class="btn google-btn social-btn" type="button">
            <span><i class="fa fa-google-plus"></i> Sign up with Google+</span>
          </button>
        </div>

        <p style="text-align:center">OR</p>

        <input
          type="text"
          id="user-name"
          class="form-control"
          placeholder="Full name"
          required=""
          autofocus=""
        />
        <input
          type="email"
          id="user-email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus=""
        />
        <input
          type="password"
          id="user-pass"
          class="form-control"
          placeholder="Password"
          required
          autofocus=""
        />
        <input
          type="password"
          id="user-repeatpass"
          class="form-control"
          placeholder="Repeat Password"
          required
          autofocus=""
        />

        <button class="btn btn-primary btn-block" type="submit">
          <i class="fa fa-sign-in"></i> Sign Up
        </button>
        <a href="#" id="cancel_signup"><i class="fa fa-angle-left"></i> Back</a>
      </form>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "sign",
layout:'auth',
  methods: {
    getImageRequirePath(path) {
      return require(path);
    }
  }
};
</script>
