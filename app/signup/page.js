"use client"

import "./signup.css";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiMeta } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleSubmit = (e) => {
  e.preventDefault(); 
  router.push("/dashboard");
};
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo">
          <div className="logo-dot"></div>
          <span>aps</span>
        </div>

        <div className="left-content">
          <h1>
            Expert level Cybersecurity <br />
            in <span className="accent">hours</span> not weeks.
          </h1>

          <div className="features">
            <p className="feature-title">What's included</p>

            <ul>
              <li>
                Effortlessly spider and map targets to uncover hidden security
                flaws
              </li>
              <li>
                Deliver high-quality, validated findings in hours, not weeks.
              </li>
              <li>
                Generate professional, enterprise-grade security reports
                automatically.
              </li>
            </ul>
          </div>

          <div className="trust">
            <div className="trust-row">
              <span className="trust-star">★</span>
              <span>Trustpilot</span>
            </div>
            <p>
              Rated 4.5/5.0 <span>(100k+ reviews)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <div className="card">
          <h2>Sign up</h2>
          <p className="login-link">
            Already have an account? <span>Log in</span>
          </p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First name*" />
            <input type="text" placeholder="Last name*" />
            <input type="email" placeholder="Email address*" />
            <input
              type="password"
              placeholder="Password (8+ characters)*"
            />

             <label className="terms">
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              <span className="terms-text">
                I agree to Aps's <a>Terms & Conditions</a> and acknowledge the{" "}
                <a>Privacy Policy</a>
              </span>
            </label>
            <button type="submit" className="primary-btn">
  Create account
</button>

            <div className="social-buttons">
  <button type="button" className="social apple">
    <FaApple size={18} color="white" />
  </button>

  <button type="button" className="social google">
    <FcGoogle size={20} />
  </button>

  <button type="button" className="social meta">
    <SiMeta size={22} color="white" />
  </button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
}