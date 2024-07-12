import React from "react";
import { logo } from "../assets";
function Hero() {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="w-full flex justify-between items-center flex-row mb-10 pt-10">
                <div className="flex flex-row align-middle justify-center">
                    <img
                        src={logo}
                        alt="Sumz-logo"
                        className="w-14 object-contain"
                    />
                    <h2 className="font-poppins font-bold gradient text-3xl mt-[15px]">
                        Brief Read
                    </h2>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        window.open(
                            "https://github.com/Mohamed-shabil/ai_summarizer"
                        );
                    }}
                    className="gradient_btn"
                >
                    Github
                </button>
            </nav>
            <h1 className="head_text font-poppins font-semibold">
                Read Article Briefly with
                <br className="max-md:hidden" />
                <span className="gradient">BriefRead</span>
            </h1>
            <h2 className="desc">
                {/* Simplify Your reading with BriefRead, an open-source article
                Summerizer that transform legnthy articles into clear and
                consice summaries */}
                BriefRead simplifies your reading experience by providing
                concise summaries of any article. Just paste the link, and get
                the key points instantly.
            </h2>
        </header>
    );
}

export default Hero;
